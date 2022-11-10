
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pr from "pareto-core-resolve"
import * as pw from "pareto-core-raw"

import * as arithmetic from "api-pareto-arithmetic"
import * as collation from "api-pareto-collation"

import * as inf from "../../interface"
import { TOverview_Project } from "../../interface"

export type FFirst3Characters = ($: string) => string


export function f_reportGraphviz(
    $d: {
        readonly first3Characters: FFirst3Characters
        readonly sortedForEach: collation.FSortedForEach
        readonly dictionaryMaxOrZero: arithmetic.FDictionaryMaxOrZero
    }
): inf.PReportGraphviz {
    return ($, $i) => {
        const projects = $.projects

        const buckets: { [key: string]: { [key: string]: pm.ArrayBuilder<string> } } = {}

        $d.sortedForEach($.projects, ($) => {
            const projectType = $d.first3Characters($.key)
            if (buckets[projectType] === undefined) {
                buckets[projectType] = {}
            }
            const typeBucket = buckets[projectType]
            function getDepth(project: TOverview_Project): number {
                if (projectType === "res") {
                    return 0
                } else {
                    return $d.dictionaryMaxOrZero(project.parts.map(($, key) => {
                        if (key !== "pub") {
                            return 0
                        } else {
                            return $d.dictionaryMaxOrZero(
                                $.dependencies.map(($) => {
                                    let thisDepth = pr.getEntry(
                                        projects,
                                        key,
                                        ($) => {
                                            if ($d.first3Characters(key) === projectType) {
                                                return getDepth($) + 1
                                            } else {
                                                return 0
                                            }
                                        },
                                        () => {
                                            return 0
                                        }
                                    )

                                    return thisDepth
                                })
                            )
                        }

                    }))
                }
            }
            const depth = getDepth($.value)
            if (typeBucket[`${depth}`] === undefined) {
                typeBucket[`${depth}`] = pm.createArrayBuilder()
            }
            typeBucket[depth].push($.key)
        })


        type ProjectType =
            | ["exe", null]
            | ["res", null]
            | ["lib", null]
            | ["api", null]

        function getType(name: string): ProjectType {
            const typeAsString = $d.first3Characters(name)
            switch (typeAsString) {
                case "api":
                    return ["api", null]
                case "exe":
                    return ["exe", null]
                case "lib":
                    return ["lib", null]
                case "res":
                    return ["res", null]
                default: pl.panic(`unexpected project type: ${typeAsString} in ${name}`)
            }
        }

        $i.log(``)
        $i.log(`digraph G {`)
        $i.log(`\trankdir="LR"`)

        function doCategory(name: string) {

            $d.sortedForEach($.projects, ($) => {
                const projectKey = $.key
                const project = $.value
                if (getType($.key)[0] !== name) {
                    return
                }

                const projectType = getType(projectKey)
                function getShape(type: ProjectType): string {
                    switch (type[0]) {
                        case "api":
                            return pl.cc(type[1], ($) => {
                                return "parallelogram"
                            })
                        case "exe":
                            return pl.cc(type[1], ($) => {
                                return "parallelogram"
                            })
                        case "lib":
                            return pl.cc(type[1], ($) => {
                                return "box"
                            })
                        case "res":
                            return pl.cc(type[1], ($) => {
                                return "diamond"
                            })
                        default: return pl.au(type[0])
                    }
                }


                //`color="red", penwidth=3` : `color="green"`
                $d.sortedForEach(
                    $.value.parts,
                    ($) => {
                        if ($.value.isPublic) {
                            const partIsDirty = $.value.status[0] !== "clean"
                                ? true
                                : $.value.dependenciesDirty

                            $i.log(`\t"${projectKey}" [ ${project.isDirty ? ` color="red", penwidth=3` : `color="green"`
                                } ${partIsDirty ? `fillcolor="red", style="filled"` : ``
                                } shape="${getShape(projectType)
                                }" ]`)
                        }
                    })
            })

        }
        doCategory("exe")
        doCategory("res")
        doCategory("lib")
        doCategory("api")
        $d.sortedForEach($.projects, ($) => {
            const projectKey = $.key

            const projectType = getType($.key)


            $d.sortedForEach(
                $.value.parts,
                ($) => {

                    if ($.value.isPublic) {
                        function doDependencies($: pt.Dictionary<inf.TOverview_Dependency>) {
                            $d.sortedForEach(
                                $,
                                ($) => {
                                    pr.getEntry(
                                        projects,
                                        $.key,
                                        () => {
                                            $i.log(`\t"${projectKey}" -> "${$.key}"`)
                                        },
                                        () => {

                                            if (projectType[0] === "res") {
                                                //the dependencies of res are not relevant
                                                return
                                            }
                                            const core_libs = pw.wrapRawDictionary({
                                                "pareto-core-async": null,
                                                "pareto-core-exe": null,
                                                "pareto-core-lib": null,
                                                "pareto-core-raw": null,
                                                "pareto-core-resolve": null,
                                                "pareto-core-state": null,
                                                "pareto-core-tostring": null,
                                                "pareto-core-types": null,
                                            })

                                            pr.getEntry(
                                                core_libs,
                                                $.key,
                                                () => {

                                                },
                                                () => {
                                                    //not a core lib
                                                    const depname = `${projectKey}--${$.key}`
                                                    $i.log(`\t"${depname}" [label= "${$.key}"]`)
                                                    $i.log(`\t"${projectKey}" -> "${depname}"`)
                                                }
                                            )
                                        }
                                    )
                                })
                        }

                        doDependencies($.value.dependencies)
                        doDependencies($.value.devDependencies)
                    }
                })
        })
        $d.sortedForEach(pw.wrapRawDictionary(buckets), ($) => {
            $d.sortedForEach(pw.wrapRawDictionary($.value), ($) => {
                $i.log(`\t{ rank=same`)
                $.value.getArray().forEach(($) => {
                    $i.log(`\t\t"${$}"`)
                })
                $i.log(`\t}`)
            })
        })
        $i.log(`}`)

    }
}