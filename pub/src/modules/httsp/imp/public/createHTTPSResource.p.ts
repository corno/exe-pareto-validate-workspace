

import * as pm from "pareto-core-state"

import * as api from "../../interface"

export const f_createHTTPSResource: api.FCreateHTTPSResource = ($) => {
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
                                const builder = pm.createArrayBuilder<string>()
                                return {
                                    onData: ($) => {
                                        builder.push($)
                                    },
                                    onEnd: () => {
                                        cb(p2.getArrayAsString(builder.getArray(), ""))
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