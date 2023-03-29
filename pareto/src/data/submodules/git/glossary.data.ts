import * as pd from 'pareto-core-data'

import {
    afunction,
    aInterface,
    aInterfaceMethod, externalTypeReference, group, imp, member, ref, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Error": type(taggedUnion({
                "unknown": string(),
            })),
            "GitIsCleanParameters": type(group({
                "directory": member(ref(externalTypeReference("common", "Path"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "HandleError": aInterface(aInterfaceMethod((typeReference("Error")))),
        }),
        'algorithms': d({
            "GitIsClean": afunction(externalTypeReference("common", "Boolean"), typeReference("GitIsCleanParameters")),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}