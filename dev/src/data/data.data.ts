import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2pareto"

import { $ as graphviz } from "./models/graphviz.data"

export const $: pt.Array<gliana2pareto.T.GenerateModuleData<pd.SourceLocation>> = pd.a([
    {
        'path': `../../pareto/src/data/graphviz`,
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', {}],
                }],
                'visitor interface': [false],
                'algorithms': {
                    'serialize': [false],
                },
                
            },
            'mappedModel': {
                'model': graphviz,

                'stringmapping': pd.d({
                    "identifier": ['string', null]
                }),
            },
        }
    }
])