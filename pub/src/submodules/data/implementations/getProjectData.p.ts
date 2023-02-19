import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-data'

import * as api from "../api"

export const $$: api.CgetProjectData = ($d) => {
    return ($) => {
        return pl.tuple2<boolean, pt.Dictionary<api.T.Project.parts.D>, api.T.Project>(
            $d.gitIsClean({ directory: $.path }),
            $d.readDirectory(
                {
                    path: [$.path]
                },
            ).map(($): pt.AsyncValue<pt.Dictionary<api.T.Project.parts.D>> => {
                return $.filter(
                    ($, key) => {
                        //if the directory child is in the list, then don't filter it
                        return pr.getEntry(
                            pd.wrapRawDictionary({
                                "dev": null,
                                "pub": null,
                                "test": null,
                            }),
                            key,
                            () => $,
                            () => undefined

                        )
                    }
                ).asyncMap(($): pt.AsyncValue<api.T.Project.parts.D> => {
                    return $d.getPackage($.path)
                        .map((pkg): pt.AsyncValue<api.T.Project.parts.D> => {
                            function resolveDependencies(rawJSONDependencies: undefined | pt.Dictionary<string>): pt.AsyncValue<pt.Dictionary<api.T.Dependency>> {
                                return pl.cc(rawJSONDependencies, ($): pt.Dictionary<string> => {
                                    return $ === undefined
                                        ? pl.createEmptyDictionary()
                                        : $
                                }).asyncMap(($, key) => {
                                    const v = $
                                    return $d.getRemoteData(key).map(($) => {
                                        return pl.asyncValue({
                                            remote: $,
                                            version: v,
                                        })
                                    })
                                })
                            }

                            return pl.tuple3(
                                resolveDependencies(pkg.dependencies),
                                resolveDependencies(pkg.devDependencies),
                                pkg.name === undefined
                                    ? pl.asyncValue<api.T.OptionalRemoteData>([false])
                                    : $d.getRemoteData(pkg.name),
                                ($): api.T.Project.parts.D => {
                                    return {
                                        'packageData': [true, {
                                            'name': pkg.name === undefined ? [false] : [true, pkg.name],
                                            'version': pkg.version === undefined ? [false] : [true, pkg.version],
                                            'content fingerprint': pkg['content-fingerprint'] === undefined ? [false] : [true, pkg["content-fingerprint"]],
                                            'dependencies': $.first,
                                            'devDependencies': $.second,
                                            'remote': $.third,
                                        }]
                                    }
                                },

                            )
                        }
                        )
                })
            }),
            (tuple): api.T.Project => {
                const project: api.T.Project = {
                    'git is clean': tuple.first,
                    'parts': tuple.second
                }
                pr.getEntry(
                    tuple.second,
                    "pub",
                    () => {

                    },
                    () => {
                        pl.logDebugMessage(`missing pub`)
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