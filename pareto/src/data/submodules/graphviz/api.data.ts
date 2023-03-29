import * as pd from 'pareto-core-data'

import { algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "unboundSerialize": algorithm(procedure("this", {}, "UnboundSerialize"), {}, dependent(null, {
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "createIdentifier": sfunction("this", {}, "CreateIdentifier"),
        }, {})),
        "serialize": algorithm(procedure("this", {}, "Serialize")),
    }),
}