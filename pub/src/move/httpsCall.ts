

import * as pl from "pareto-core-lib"
import * as pt from "pareto-core-types"

import * as https from "res-pareto-https"
import * as hapi from "api-pareto-https"

export function httpCall(
    $: hapi.CreateHTTPSResource_Data
): pt.AsyncValue<string> {
    return {
        execute: (cb) => {
            https.createHTTPSResource(
                $,
                {
                    onError: ($) => {
                        pl.logDebugMessage("IMPLEMENT ME")
                    }
                }
            ).get(
                {
                    id: []
                },
                {
                    onFailed: () => {
                        pl.logDebugMessage("IMPLEMENT ME")

                    },
                    onNotExists: () => {
                        pl.logDebugMessage("IMPLEMENT ME")

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
