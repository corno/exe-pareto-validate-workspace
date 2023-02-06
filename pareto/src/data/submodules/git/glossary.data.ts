import * as pr from 'pareto-core-raw'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.TGlossary = {
    'imports': d({
        "common": "glo-pareto-common",
    }),
    'parameters': d({}),
    'templates': d({}),
    'types': types({
        "Error": taggedUnion({
            "unknown": string(),
        }),
        "GitIsCleanParameters": group({
            "directory": member(string()),
        }),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "GitIsClean": func(typeReference("GitIsCleanParameters"), null, null, data(typeReference("common", "Boolean"), true)),
        "HandleError": func(typeReference("Error"), null, null, null),
    }),
}