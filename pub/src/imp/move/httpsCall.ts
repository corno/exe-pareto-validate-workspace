

import * as pl from "pareto-core-lib"
import * as pt from "pareto-core-types"

import * as https from "res-pareto-https"
import * as hapi from "api-pareto-https"

export type HTTPSResource = {
    get: (
        $: {
            id: string,
        }
    ) => pt.AsyncValue<string>
}

export function createHTTPSResource(
    $: {
        hostName: string,
        contextPath: string,
    },
    $i: {
        onError: ($: hapi.HTTPSError) => void
    }
): HTTPSResource {
    const config = $
    return {
        get: ($) => {
            return {
                execute: (cb) => {
                    https.createHTTPSResource(
                        config,
                        {
                            onError: $i.onError
                        }
                    ).get(
                        {
                            //id: $.id
                            id: `/${$.id}`

                        },
                        {
                            onFailed: () => {
        
                            },
                            onNotExists: () => {
                                //pl.logDebugMessage("IMPLEMENT ME")
        
                            },
                            init: () => {
                                let out = ""
                                return {
                                    onData: ($) => {
                                        out += $
                                    },
                                    onEnd: () => {
                                        cb(out)
                                    }
                                }
                            },
                        }
                    ).execute(() => {
        
                    })
                }
            }
        }
        
    }
}