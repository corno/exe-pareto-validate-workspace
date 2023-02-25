import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Error {
        
        export type _lunknown = string
    }
    
    export type Error = 
        | ['unknown', string]
    
    export namespace GitIsCleanParameters {
        
        export type directory = gcommon.T.Path
    }
    
    export type GitIsCleanParameters = {
        readonly 'directory': gcommon.T.Path
    }
}