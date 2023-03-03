import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as mapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: mapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "unboundSerialize": algorithm(functionReference("this", {}, "UnboundSerialize"), constructor(null, {
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "createIdentifier": functionReference("this", {}, "CreateIdentifier"),
        })),
        "serialize": algorithm(functionReference("this", {}, "Serialize")),
    })
}