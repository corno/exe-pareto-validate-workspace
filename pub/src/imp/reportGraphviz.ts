
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pr from "pareto-core-resolve"
import * as pw from "pareto-core-raw"

import * as inf from "../interface"


export const reportGraphviz: inf.ReportGraphviz = (
    $, $i, $d
) => {


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

    const includedNodes = pm.createArrayBuilder<string>()

    $.projects.forEach((a, b) => false, (project, key) => {
        const projectKey = key
        project.parts.forEach((a, b) => false, (part, key) => {
            if (part.isPublic) {
                includedNodes.push(`${projectKey}`)
            }
        })
    })
    let clusterCounter = 0

    function doCategory(name: string) {

        $i.log(`\tsubgraph cluster_${clusterCounter++} {`)

        $.projects.forEach((a, b) => false, (project, key) => {
            const projectKey = key
            if (getType(key)[0] !== name) {
                return
            }
            $i.log(`\t\tsubgraph cluster_${clusterCounter++} {`)
            if (!project.isClean) {
                $i.log(`\t\t\tgraph[color="red"]`)
            }
            project.parts.forEach((a, b) => false, (part, key) => {
                if (part.isPublic) {
                    $i.log(`\t\t\t"${projectKey}" [ ${part.status[0] !== "clean" || !part.dependenciesClean ? `color="red", penwidth=3` : `color="green"`} ]`)
                }
            })
            $i.log(`\t\t}`)
        })

        $i.log(`\t}`)
    }
    doCategory("bin")
    doCategory("res")
    doCategory("lib")
    doCategory("api")
    const projects = $.projects
    $.projects.forEach((a, b) => false, (project, key) => {
        const projectKey = key
        const projectType = getType(projectKey)


        project.parts.forEach((a, b) => false, (part, key) => {
            const partKey = key

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

                                    "pareto-core-types": null,
                                    "pareto-core-state": null,
                                    "pareto-core-tostring": null,
                                    "pareto-core-exe": null,
                                    "pareto-core-async": null,
                                    "pareto-core-lib": null,
                                    "pareto-core-resolve": null,
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
    $i.log(`}`)

}
