
import * as pl from "pareto-core-lib"

import * as api from "../../interface"
import * as async from "api-pareto-async"
import * as pt from "pareto-core-types"

import * as uglyStuff from "api-pareto-ugly-stuff"
import * as https from "api-pareto-https"

export function f_createRegistryCache(
    $d: {
        // readonly "httpsResource": async.FGetAsyncData<string, pt.Array<string>>,
        readonly "httpsResource": https.FHTTPSResource
        readonly "JSONParseStream": uglyStuff.FJSONParseStream
        readonly "createCache": async.FCreateCache
    },
    $a: pt.ProcessAsyncValue,
): api.FCreateRegistryCache {
    return (
        $i
    ) => {
        return $d.createCache(
            {
                getData: ($) => {
                    let hasError = false
                    type Remote = {
                        "dist-tags"?: {
                            latest?: string
                        },
                        versions: {
                            [key: string]: {
                                "content-fingerprint"?: string
                            }
                        }
                    }
                    return $d.JSONParseStream<Remote>(
                        {
                            connectToStream: ($i) => {
                                $d.httpsResource(
                                    {
                                        id: $,
                                    },
                                    {
                                        onNotExists: () => {
                                            pl.logDebugMessage("@@@@@@@@")
                                        },
                                        onFailed: () => {
                                            pl.logDebugMessage("@@@@@@@@")

                                        },
                                        init: () => {
                                            return $i
                                        }
                                    },
                                    $a,
                                )
                            }
                        }
                    ).map((json) => {
                        return pl.asyncValue(
                            (() => {
                                if (hasError) {
                                    return null
                                }

                                function getLatest(): string | null {
                                    if (pl.isNotUndefined(json["dist-tags"])) {
                                        if (pl.isNotUndefined(json["dist-tags"].latest)) {
                                            return json["dist-tags"].latest
                                        } else {
                                            return null
                                        }
                                    } else {
                                        return null

                                    }

                                }
                                function getContentFingerPrint(latest: string): string | null {
                                    const lv = json["versions"][latest]
                                    if (pl.isNotUndefined(lv)) {
                                        const cf = lv["content-fingerprint"]
                                        if (pl.isNotUndefined(cf)) {
                                            return cf
                                        } else {
                                            return null
                                        }
                                    } else {
                                        return null
                                    }

                                }
                                const latest = getLatest()
                                return {
                                    latestVersion: latest,
                                    contentFingerprint: pl.isNotNull(latest) ? getContentFingerPrint(latest) : null
                                }
                            })()
                        )
                    }
                        // {

                        // },
                        // {

                        // }
                        // (d) => {
                        //     data += d
                        // },
                        // (err) => {
                        //     $i.error(`https error, NO ADDITIONAL DATA`)
                        // },
                        // () => {

                        //     )

                        // }

                    )
                }
            }
        )
    }
}