import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as g_liana from "lib-liana/dist/main"

import { $ as graphviz } from "./models/graphviz.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/graphviz/glossary.generated.ts`,
            'data': {
                'settings': {
                    'datamodel': [true, {
                        'annotations': true,
                        'properties optional': false,
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                    
                },
                'mapped library': {
                    'library': graphviz,
    
                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            }
        }
    ])
}
