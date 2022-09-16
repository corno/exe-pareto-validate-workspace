import * as api from "api-pareto-https"

export type FCreateHTTPSResource = (
    $: {
        readonly "hostName": string,
        readonly "contextPath": string,
    },
    $i: {
        readonly "onError": ($: api.HTTPSError) => void
    }
) => XHTTPSResource