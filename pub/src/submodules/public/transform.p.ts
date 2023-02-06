
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../../interface"


export function f_transform(): api.FTransform {

    return ($) => {
        function anyEntry(
            $: pt.Dictionary<boolean>,
        ): boolean {
            return $.reduce<boolean>(false, (current, $) => $
                ? true
                : current
            )
        }
        return {
            projects: $.projects.map<api.TOverview_Project>((project, projectName) => {


                const parts: pt.Dictionary<api.TOverview_Part> = project.parts.map(($, key) => {

                    function doPart(
                        part: api.TPart,
                        isPublic: boolean,
                    ): api.TOverview_Part {
                        if (part.packageData === null) {
                            return {
                                isPublic: isPublic,
                                dependencies: pl.createEmptyDictionary(),
                                devDependencies: pl.createEmptyDictionary(),
                                dependenciesDirty: true,
                                status: ["missing package", null],
                                version: null,
                                contentFingerprint: null,
                            }
                        }
                        function processDeps(deps: pt.Dictionary<api.TDepencency>): pt.Dictionary<api.TOverview_Dependency> {
                            return deps.map<api.TOverview_Dependency>((v) => {

                                return {
                                    version: v.version,
                                    remoteversion: pl.isNotNull(v.remote) ? v.remote.latestVersion : null,
                                    status: (() => {
                                        if (pl.isNotNull(v.remote)) {
                                            if (`^${v.remote.latestVersion}` === v.version) {
                                                return ["clean", null]
                                            } else {
                                                return ["not at latest version", null]
                                            }
                                        } else {
                                            return ["missing remote", null]
                                        }
                                    })(),
                                }
                            })
                        }
                        const deps = processDeps(part.packageData.dependencies)
                        const devDeps = processDeps(part.packageData.devDependencies)
                        const status = ((): api.TOverview_PartStatus => {
                            if (isPublic) {
                                if (part.packageData.name === projectName) {
                                    if (pl.isNotNull(part.packageData.remote)) {
                                        if (pl.isNotNull(part.packageData.remote.contentFingerprint)) {
                                            if (part.packageData.remote.contentFingerprint === part.packageData.contentFingerprint) {
                                                return ["clean", null]
                                            } else {
                                                return ["fingerprint out of sync", null]
                                            }
                                        } else {
                                            return ["no remote fingerprint", null]
                                        }
                                    } else {
                                        return ["unpublished", null]
                                    }
                                } else {
                                    return ["invalid package name", null]
                                }
                            } else {
                                return ["clean", null]
                            }
                        })()

                        return {
                            isPublic: isPublic,
                            dependencies: deps,
                            devDependencies: devDeps,
                            status: status,
                            version: part.packageData.version,
                            contentFingerprint: part.packageData.contentFingerprint,
                            dependenciesDirty: anyEntry(deps.map($ => $.status[0] !== "clean"))
                                ? true
                                : anyEntry(deps.map($ => $.status[0] !== "clean"))

                        }

                    }
                    return doPart($, key === "pub")
                })




                return {
                    parts: parts,
                    gitIsClean: project.gitIsClean,
                    isDirty:
                        anyEntry(parts.map(($) => $.dependenciesDirty))
                            ? true
                            : project.gitIsClean
                }

            })
        }
    }
}
