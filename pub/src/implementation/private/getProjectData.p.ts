

import * as pt from "pareto-core-types"
import * as pa from "pareto-core-async"
import * as pr from "pareto-core-resolve"
import * as pw from "pareto-core-raw"

import * as api from "../../interface"


export const f_getProjectData: api.FGetProjectData = (
    $, $i, $d,
) => {
    return pa.tuple2<string | null, pt.Dictionary<api.TPart>, api.TProject>(
        $d.processCall(
            `git -C ${$.projectDir} diff --exit-code && git -C ${$.projectDir} log origin/master..master --exit-code`,
            {
                // onResult: (cleanstdout) => {
                //     return pa.value(cleanstdout.trimEnd() === "")
                // },
                onError: () => {
                    return pa.value(false)
                }
            },
        ),
        pa.rewrite(
            $d.readDirectory(
                {
                    path: [$.projectDir]
                },
            ),
            ($): pt.AsyncValue<pt.Dictionary<api.TPart>> => {
                return pa.dictionary(
                    $.filter(
                        ($, key) => {
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
                    ),
                    ($): pt.AsyncValue<api.TPart> => {
                        return pa.rewrite(
                            $d.readFile(
                                {
                                    path: [$.path, `package.json`],
                                },
                            ),
                            ($): pt.AsyncValue<api.TPart> => {
                                const pkg = $d.jsonparse($)

                                function resolveDependencies(rawJSONDependencies: undefined | { [key: string]: string }) {
                                    return pa.dictionary(
                                        pw.wrapRawDictionary<string>(
                                            rawJSONDependencies === undefined
                                                ? {}
                                                : rawJSONDependencies
                                        ),
                                        (v, k) => {
                                            return pa.rewrite(
                                                $d.registryCache.getEntry(k),
                                                ($) => {
                                                    return pa.value({
                                                        remote: $,
                                                        version: v,
                                                    })
                                                }
                                            )

                                        }

                                    )
                                }

                                return pa.tuple3(
                                    resolveDependencies(pkg.dependencies),
                                    resolveDependencies(pkg.devDependencies),
                                    pkg.name === undefined
                                        ? pa.value(null)
                                        : $d.registryCache.getEntry(pkg.name),
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
                    }
                )
            }


        ),
        (tuple): TProject => {
            const project: TProject = {
                gitDirty: tuple.first === null
                    ? true
                    : $d.trimEnd(tuple.first) !== "",
                parts: tuple.second
            }
            let foundPub = false
            tuple.second.forEach(() => false, ($, key) => {
                if (key === "pub") {
                    foundPub = true
                }
            })
            if (!foundPub) {
                $i.error(`missing pub`)
            }
            return project
        },

    )
}