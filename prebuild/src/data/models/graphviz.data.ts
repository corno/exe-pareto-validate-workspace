import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
import {
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    //string,
    taggedUnion,
    string,
    prop,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': d({}),
        'string types': d({
            "text": null,
        }),
        'global types': d({
            "Root": globalType({}, group({
            })),



        }),
    },
    'root': r("Root"),
}