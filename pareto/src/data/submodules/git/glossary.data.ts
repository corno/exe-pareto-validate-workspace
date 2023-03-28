import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, type
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Error": type(taggedUnion({
                "unknown": string(),
            })),
            "GitIsCleanParameters": type(group({
                "directory": member(reference("common", "Path")),
            })),
        }),
    },
    'builders': d({}),
    'interfaces': d({
    }),
    'functions': d({
        "GitIsClean": func(typeReference("GitIsCleanParameters"), null, null, data(typeReference("common", "Boolean"), true)),
        "HandleError": func(typeReference("Error"), null, null, null),
    }),
}