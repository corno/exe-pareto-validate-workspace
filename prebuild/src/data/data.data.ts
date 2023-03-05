import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as gliana2glossary from "lib-liana/dist/submodules/liana2glossary"

import { $ as graphviz } from "./models/graphviz.data"

export const $: pt.Array<gliana2glossary.T.GenerateData<pd.SourceLocation>> = pd.a([
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
            'mappedModel': {
                'model': graphviz,

                'stringmapping': pd.d({
                    "identifier": ['string', null]
                }),
            },
        }
    }
])