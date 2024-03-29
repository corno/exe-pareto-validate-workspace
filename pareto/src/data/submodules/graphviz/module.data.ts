import * as pd from 'pareto-core-data'

import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.deprecated"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                //"common": external("glo-pareto-common"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                // "process": external( "res-pareto-process"),
                // "string": external("res-pareto-string"),
                // "tostring": external("res-pareto-tostring"),
                // "this": this_(),
            }),
        }
    },
    'implementation': ['typescript', null],
}