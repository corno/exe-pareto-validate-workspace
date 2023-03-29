import * as pt from 'pareto-core-types'

import * as g_main from "res-pareto-main"

export namespace D {
    
    
}

export namespace A {
    
    export type createGraphvizGenerator = () => g_this.ASYNC.A.C.CreateGraphvizGenerator
    
    export type createWorkspaceValidator = () => g_this.ASYNC.A.C.CreateWorkspaceValidator
}

export type API = {
    readonly 'createGraphvizGenerator': A.createGraphvizGenerator
    readonly 'createWorkspaceValidator': A.createWorkspaceValidator
}