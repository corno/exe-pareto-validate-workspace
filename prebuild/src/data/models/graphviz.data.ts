import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
import {
    globalType,
    group,
    r
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: gliana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'terminal types': d({
        "text": null,
    }),
    'global types': d({
        "Root": globalType({}, group({
        })),



    }),
}