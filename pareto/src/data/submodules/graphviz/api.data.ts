import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    nested,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

import { $ as glossary } from "./glossary.data"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': glossary,
    'api': {
        'imports': d({
            "foreach": "res-pareto-foreach",
        }),
        'algorithms': d({
            "unboundSerialize": algorithm(definitionReference("UnboundSerialize"), constructor(null, {
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "createIdentifier": definitionReference("CreateIdentifier"),
            })),
            "serialize": algorithm(definitionReference("Serialize")),
        })
    },
}
