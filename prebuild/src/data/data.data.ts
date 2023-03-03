import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'
import * as pv from 'pareto-core-dev'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2pareto"

import { $ as graphviz } from "./models/graphviz.data"

pv.logDebugMessage("REENALE GRAPHVIZ")

export const $: pt.Array<gliana2pareto.T.GenerateModuleData<pd.SourceLocation>> = pd.a([
    // {
    //     'path': `../../pareto/src/data/submodules/graphviz`,
    //     'data': {
    //         'configuration': {
    //             'datamodel': [true, {
    //                 'annotations': true,
    //                 'properties optional': false,
    //                 'reference mapping': ['string', null],
    //             }],
    //             'visitor interface': [false],
    //             'algorithms': {
    //                 'serialize': [false],
    //             },
                
    //         },
    //         'mappedModel': {
    //             'model': graphviz,

    //             'stringmapping': pd.d({
    //                 "identifier": ['string', null]
    //             }),
    //         },
    //     }
    // }
])