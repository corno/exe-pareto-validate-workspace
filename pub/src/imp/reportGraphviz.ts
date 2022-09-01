
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pr from "pareto-core-resolve"
import * as pw from "pareto-core-raw"

import * as inf from "../interface"
import { Overview_Project } from "../interface"


function sortAlphabetically(a: string, b: string): boolean {
    return a > b
}



export const reportGraphviz: inf.ReportGraphviz = ($, $i, $d) => {
    const projects = $.projects

    const buckets: { [key: string]: { [key: number]: pm.ArrayBuilder<string> } } = {}

    $.projects.forEach(sortAlphabetically, (project, key) => {
        const projectName = key
        const projectType = $d.substr(key, 0, 3)
        if (buckets[projectType] === undefined) {
            buckets[projectType] = {}
        }
        const typeBucket = buckets[projectType]
        function getDepth(project: Overview_Project): number {
            if (projectType === "res") {
                return 0
            } else {
                const res = project.parts.reduce<number>(
                    0,
                    (current, $, key) => {
                        if (key !== "pub") {
                            return current
                        }
                        return $.dependencies.reduce(
                            current,
                            (current, $, key) => {
                                //pl.logDebugMessage(`${projectName}=>${key}`)

                                let thisDepth = 0
                                pr.getEntry(
                                    projects,
                                    key,
                                    ($) => {
                                        const depType = $d.substr(key, 0, 3)
                                        //pl.logDebugMessage(`>>>>> ${depType} ${projectType}`)
                                        if (depType === projectType) {
                                            //pl.logDebugMessage("HIERO2<<<<<<<<<<<<<<<<<<<<<<<<")

                                            thisDepth = getDepth($) + 1
                                        }
                                    },
                                    () => {

                                    }
                                )

                                return $d.max(current, thisDepth)
                            },
                        )
                    },
                )
                return res
            }
        }
        const depth = getDepth(project)
        if (typeBucket[depth] === undefined) {
            typeBucket[depth] = pm.createArrayBuilder()
        }
        typeBucket[depth].push(key)
    })


    type ProjectType =
        | ["exe", {}]
        | ["res", {}]
        | ["lib", {}]
        | ["api", {}]

    function getType(name: string): ProjectType {
        const typeAsString = $d.substr(name, 0, 3)
        switch (typeAsString) {
            case "api":
                return ["api", {}]
            case "exe":
                return ["exe", {}]
            case "lib":
                return ["lib", {}]
            case "res":
                return ["res", {}]
            default: pl.panic(`unexpected project type: ${typeAsString} in ${name}`)
        }
    }

    $i.log(``)
    $i.log(`digraph G {`)
    $i.log(`\trankdir="LR"`)

    function doCategory(name: string) {

        $.projects.forEach(sortAlphabetically, (project, key) => {
            const projectKey = key
            if (getType(key)[0] !== name) {
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
            project.parts.forEach(sortAlphabetically, (part, key) => {
                if (part.isPublic) {
                    $i.log(`\t"${projectKey}" [ ${project.isClean ? `color="green"`: ` color="red", penwidth=3`} ${part.status[0] !== "clean" || !part.dependenciesClean ? `fillcolor="red", style="filled"` : ``} shape="${getShape(projectType)}" ]`)
                }
            })
        })

    }
    doCategory("exe")
    doCategory("res")
    doCategory("lib")
    doCategory("api")
    $.projects.forEach(sortAlphabetically, (project, key) => {
        const projectKey = key

        const projectType = getType(key)


        project.parts.forEach(sortAlphabetically, (part, key) => {

            if (part.isPublic) {
                function doDependencies($: pt.Dictionary<inf.Overview_Dependency>) {
                    $.forEach((a, b) => false, (v, key) => {
                        pr.getEntry(
                            projects,
                            key,
                            () => {
                                $i.log(`\t"${projectKey}" -> "${key}"`)
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
                                    key,
                                    () => {

                                    },
                                    () => {
                                        //not a core lib
                                        const depname = `${projectKey}--${key}`
                                        $i.log(`\t"${depname}" [label= "${key}"]`)
                                        $i.log(`\t"${projectKey}" -> "${depname}"`)
                                    }
                                )
                            }
                        )
                    })
                }

                doDependencies(part.dependencies)
                doDependencies(part.devDependencies)
            }
        })
    })
    pw.wrapRawDictionary(buckets).forEach(sortAlphabetically, ($, key) => {
        pw.wrapRawDictionary($).forEach(sortAlphabetically, ($, key) => {
            $i.log(`\t{ rank=same`)
            $.getArray().forEach(($) => {
                $i.log(`\t\t"${$}"`)
            })
            $i.log(`\t}`)
        })
    })
    $i.log(`}`)

}
