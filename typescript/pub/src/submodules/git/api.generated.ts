import * as pt from 'pareto-core-types'

import * as g_process from "res-pareto-process"
import * as g_string from "res-pareto-string"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export namespace D {
    
    export type createGitIsClean = {
        readonly 'joinNestedStrings': g_tostring.SYNC.A.F.JoinNestedStrings
        readonly 'processCall': g_process.ASYNC.A.F.Call
        readonly 'trimEnd': g_string.SYNC.A.F.TrimEnd
    }
}

export namespace A {
    
    export type createGitIsClean = ($d: D.createGitIsClean, $se: {
        readonly 'handleError': g_this.ASYNC.I.HandleError
    }) => g_this.ASYNC.A.F.GitIsClean
}

export type API = {
    readonly 'createGitIsClean': A.createGitIsClean
}