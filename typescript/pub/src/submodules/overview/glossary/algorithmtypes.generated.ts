import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_data from "../../data"
import * as g_graphviz from "../../graphviz"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type CreateGraphviz = ($: T.Workspace) => g_graphviz.T.Graph
        }
        
        
        export namespace F {
            export type Transform = ($: g_data.T.Workspace) => T.Workspace
        }
    }
}