import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CcreateGraphviz = gthis.FCreateGraphviz

export type Ctransform = gthis.FTransform

export type API = {
    createGraphviz: CcreateGraphviz
    transform: Ctransform
}