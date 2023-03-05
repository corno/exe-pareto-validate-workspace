import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type createGraphviz = g_this.F.CreateGraphviz

export type transform = g_this.F.Transform

export type API = {
    createGraphviz: createGraphviz
    transform: transform
}