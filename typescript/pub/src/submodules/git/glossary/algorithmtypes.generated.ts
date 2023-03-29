import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type HandleError = ($: T.Error, ) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type GitIsClean = ($: T.GitIsCleanParameters) => pt.AsyncValue<g_common.T.Boolean>
        }
    }
}

export namespace SYNC {}