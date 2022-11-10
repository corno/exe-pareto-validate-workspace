

import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pr from "pareto-core-resolve"
import * as pw from "pareto-core-raw"

import * as api from "../../interface"
import * as async from "api-pareto-async"
// import * as uglyStuff from "api-pareto-ugly-stuff"
import * as fsLib from "lib-pareto-filesystem"


type PKG = {
    name?: string
    version?: string
    "content-fingerprint"?: string
    dependencies?: { [key: string]: string }
    devDependencies?: { [key: string]: string }
}

export function f_getProjectData(
    $d: {

        readonly readDirectory: fsLib.FReadDirectoryOrAbort,
        readonly gitIsClean: api.FGitIsClean,
        readonly getRemoteData: async.FGetAsyncData<string, api.TRemoteData | null>
        readonly getPackage: ($: string) => pt.AsyncValue<PKG>
        //readonly jsonParseStream: uglyStuff.FJSONParseStream
    }
): api.FGetProjectData {
    return ($, $i) => {


        return pl.tuple2<boolean, pt.Dictionary<api.TPart>, api.TProject>(
            $d.gitIsClean({ directory: $.projectDir}),
            $d.readDirectory(
                {
                    path: [$.projectDir]
                },
            ).map(($): pt.AsyncValue<pt.Dictionary<api.TPart>> => {
                return $.filter(
                    ($, key) => {
                        //if the directory child is in the list, then don't filter it
                        return pr.getEntry(
                            pw.wrapRawDictionary({
                                "dev": null,
                                "pub": null,
                                "test": null,
                            }),
                            key,
                            () => $,
                            () => undefined

                        )
                    }
                ).asyncMap(($): pt.AsyncValue<api.TPart> => {
                    return $d.getPackage($.path)
                    .map((pkg): pt.AsyncValue<api.TPart> => {


                        function resolveDependencies(rawJSONDependencies: undefined | { [key: string]: string }) {
                            return pw.wrapRawDictionary<string>(
                                rawJSONDependencies === undefined
                                    ? {}
                                    : rawJSONDependencies
                            ).asyncMap(($, key) => {
                                const v = $
                                return $d.getRemoteData(key).map(($) => {
                                    return pl.asyncValue({
                                        remote: $,
                                        version: v,
                                    })
                                })

                            }

                            )
                        }

                        return pl.tuple3(
                            resolveDependencies(pkg.dependencies),
                            resolveDependencies(pkg.devDependencies),
                            pkg.name === undefined
                                ? pl.asyncValue(null)
                                : $d.getRemoteData(pkg.name),
                            ($): api.TPart => {
                                return {
                                    packageData: {
                                        name: pkg.name === undefined ? null : pkg.name,
                                        version: pkg.version === undefined ? null : pkg.version,
                                        contentFingerprint: pkg["content-fingerprint"] === undefined ? null : pkg["content-fingerprint"],
                                        dependencies: $.first,
                                        devDependencies: $.second,
                                        remote: $.third,
                                    }
                                }
                            },

                        )
                    }
                    )
                })
            }),
            (tuple): api.TProject => {
                const project: api.TProject = {
                    gitDirty: tuple.first,
                    parts: tuple.second
                }
                pr.getEntry(
                    tuple.second,
                    "pub",
                    () => {

                    },
                    () => {
                        $i.error(`missing pub`)
                        tuple.second.map(($, key) => {
                            pl.logDebugMessage(`>${key}`)
                        })
                    }
                )

                return project
            },

        )
    }

}