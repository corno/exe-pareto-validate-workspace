
import * as pa from "pareto-core-async"
import * as pl from "pareto-core-lib"

import * as api from "../interface"


export const f_createRegistryCache: api.XCreateRegistryCache = (
    $i, $d
) => {
    return pa.createCache(
        (key) => {
            let hasError = false
            return pa.rewrite(
                $d.httpsResource.get(
                    {
                        id: key
                    }
                ),
                (data) => {
                    return pa.value(
                        (() => {
                            if (hasError) {
                                return null
                            }
                            const json = $d.JSONParse(data)

                            function getLatest(): string | null{
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
                            function getContentFingerPrint(latest: string): string | null{
                                if (pl.isNotNull(json["versions"][latest])) {
                                    if (pl.isNotNull(json["versions"][latest]["content-fingerprint"])) {
                                        return json["versions"][latest]["content-fingerprint"]
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
                                contentFingerprint: pl.isNotNull(latest) ? getContentFingerPrint(latest): null
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
    )
}
