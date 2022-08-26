
import * as pa from "pareto-core-async"

import * as api from "../interface"


export const createRegistryCache: api.CreateRegistryCache = (
    $i, $d
) => {

    return pa.createCache(
        (key) => {
            let hasError = false
            return pa.rewrite(
                $d.httpsCall(
                    {
                        hostName: 'registry.npmjs.org',
                        contextPath: `/${key}`
                    }
                ),
                (data) => {
                    return pa.value(
                        (() => {
                            if (hasError) {
                                return null
                            }
                            const json = $d.JSONParse(data)
                            if (json["dist-tags"] === undefined || json["dist-tags"].latest === undefined) {
                                return {
                                    latestVersion: null,
                                    contentFingerprint: null,
                                }
                            } else {
                                const latest = json["dist-tags"].latest
                                if (json["versions"][latest] === undefined || json["versions"][latest]["content-fingerprint"] === undefined) {
                                    return {
                                        latestVersion: latest,
                                        contentFingerprint: null,
                                    }
                                } else {
                                    return {
                                        latestVersion: latest,
                                        contentFingerprint: json["versions"][latest]["content-fingerprint"],

                                    }
                                }
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
