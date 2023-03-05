import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_data from "../../../data"
import * as g_graphviz from "../../../graphviz"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type CreateGraphviz = ($: T.Workspace,) => g_graphviz.T.Graph
    
    export type Transform = ($: g_data.T.Workspace,) => T.Workspace
}