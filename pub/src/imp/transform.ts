
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../interface"

const red = "\x1b[31m"
const green = "\x1b[32m"
const yellow = "\x1b[33m"
const cyan = "\x1b[36m"
const reset = "\x1b[0m"


export const transform: api.Transform = ($) => {

    return {
        projects: $.projects.map<api.Overview_Project>((project, projectName) => {

            let hasDirtyParts = false
            function doPart(
                part: api.Part,
                isPublic: boolean,
            ): api.Overview_Part {
                if (part.packageData === null) {
                    return {
                        isPublic: isPublic,
                        dependencies: pl.createEmptyDictionary(),
                        devDependencies: pl.createEmptyDictionary(),
                        dependenciesClean: true,
                        status: ["missing package", {}],
                        version: null,
                        contentFingerprint: null,
                    }
                }
                function processDeps(deps: pt.Dictionary<api.Depencency>): pt.Dictionary<api.Overview_Dependency> {
                    return deps.map<api.Overview_Dependency>((v) => {

                        return {
                            version: v.version,
                            remoteversion: v.remote === null ? null : v.remote.latestVersion,
                            status: (() => {
                                if (v.remote === null) {
                                    return ["missing remote", {}]
                                } else if (`^${v.remote.latestVersion}` !== v.version) {
                                    return ["not at latest version", {}]
                                } else {
                                    return ["clean", {}]
                                }
                            })(),
                        }
                    })
                }
                const deps = processDeps(part.packageData.dependencies)
                const devDeps = processDeps(part.packageData.devDependencies)
                const status = ((): api.Overview_PartStatus => {
                    if (!isPublic) {
                        return ["clean", {}]
                    }
                    if (part.packageData.name !== projectName) {
                        return ["invalid package name", {}]
                    } else if (part.packageData.remote === null) {
                        return ["unpublished", {}]
                    } else if (part.packageData.remote.contentFingerprint === null || part.packageData.remote.contentFingerprint !== part.packageData.contentFingerprint) {
                        return ["fingerprint out of sync", {}]
                    } else {
                        return ["clean", {}]
                    }
                })()

                const dependenciesClean =
                    deps.reduce<boolean>(true, (current, $) => $.status[0] === "clean" && current) &&
                    devDeps.reduce<boolean>(true, (current, $) => $.status[0] === "clean" && current)
                if (!dependenciesClean) {
                    hasDirtyParts = true
                }
                if (status[0] !== "clean") {
                    hasDirtyParts = true
                }
                return {
                    isPublic: isPublic,
                    dependencies: deps,
                    devDependencies: devDeps,
                    status: status,
                    version: part.packageData.version,
                    contentFingerprint: part.packageData.contentFingerprint,
                    dependenciesClean: dependenciesClean
                }

            }
            return {
                parts: project.parts.map(($, key) => {
                    return doPart($, key === "pub")
                }),
                gitClean: project.gitClean,
                isClean:
                    !hasDirtyParts &&
                    project.gitClean
            }

        })
    }
}
