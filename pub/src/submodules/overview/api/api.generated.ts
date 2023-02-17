import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CcreateGraphviz = glo.FCreateGraphviz

export type Ctransform = glo.FTransform

export type API = {
    createGraphviz: CcreateGraphviz
    transform: Ctransform
}