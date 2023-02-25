import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CcreateGraphviz = gglo.FCreateGraphviz

export type Ctransform = gglo.FTransform

export type API = {
    createGraphviz: CcreateGraphviz
    transform: Ctransform
}