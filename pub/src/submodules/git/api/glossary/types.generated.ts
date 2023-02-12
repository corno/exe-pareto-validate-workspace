import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Error {
        
        export type _lunknown = string
    }
    
    export type Error = 
        | ['unknown', string]
    
    export namespace GitIsCleanParameters {
        
        export type directory = string
    }
    
    export type GitIsCleanParameters = {
        readonly 'directory': string
    }
}