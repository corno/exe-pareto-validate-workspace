import * as pd from 'pareto-core-data'

import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                //"common": "glo-pareto-common",
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "main": external("res-pareto-main"),
            }),
        }
    },
    'implementation': ['typescript', null],
}