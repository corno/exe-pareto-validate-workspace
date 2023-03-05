import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace Error {
        
        export type _lunknown = string
    }
    
    export type Error = 
        | ['unknown', string]
    
    export namespace GitIsCleanParameters {
        
        export type directory = g_common.T.Path
    }
    
    export type GitIsCleanParameters = {
        readonly 'directory': g_common.T.Path
    }
}