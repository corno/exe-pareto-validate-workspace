import * as pd from 'pareto-core-data'

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

import { $ as glossary } from "./glossary.data"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': glossary,
    'api': {
        'imports': d({
        }),
        'algorithms': d({
        })
    },
}
