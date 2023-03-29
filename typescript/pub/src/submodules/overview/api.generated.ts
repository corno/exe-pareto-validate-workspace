import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
}

export namespace A {
    
    export type createGraphviz = () => g_this.SYNC.A.P.CreateGraphviz
    
    export type transform = () => g_this.SYNC.A.F.Transform
}

export type API = {
    readonly 'createGraphviz': A.createGraphviz
    readonly 'transform': A.transform
}