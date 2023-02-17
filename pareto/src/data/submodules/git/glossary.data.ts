import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.wrapRawDictionary

export const $: mglossary.T.Glossary<string> = {
    'imports': d({
        "common": "glo-pareto-common",
    }),
    'parameters': d({}),
    'types': d({
        "Error": type(taggedUnion({
            "unknown": string(),
        })),
        "GitIsCleanParameters": type(group({
            "directory": member(string()),
        })),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "GitIsClean": func(typeReference("GitIsCleanParameters"), null, null, data(typeReference("common", "Boolean"), true)),
        "HandleError": func(typeReference("Error"), null, null, null),
    }),
}