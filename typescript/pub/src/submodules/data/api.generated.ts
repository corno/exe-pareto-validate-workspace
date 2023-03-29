import * as pt from 'pareto-core-types'

import * as g_fs from "lib-pareto-filesystem"
import * as g_git from "../git"
import * as g_this from "./glossary"

export namespace D {
    
    export type getProjectData = {
        readonly 'getPackage': g_this.ASYNC.A.F.GetPackage
        readonly 'getRemoteData': g_this.ASYNC.A.F.GetRemoteData
        readonly 'gitIsClean': g_git.ASYNC.A.F.GitIsClean
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectoryOrAbort
    }
    
    export type getWorkspaceData = {
        readonly 'getProjectData': g_this.ASYNC.A.F.GetProjectData
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectoryOrAbort
    }
}

export namespace A {
    
    export type getProjectData = ($d: D.getProjectData, ) => g_this.ASYNC.A.F.GetProjectData
    
    export type getWorkspaceData = ($d: D.getWorkspaceData, ) => g_this.ASYNC.A.F.GetWorkspaceData
}

export type API = {
    readonly 'getProjectData': A.getProjectData
    readonly 'getWorkspaceData': A.getWorkspaceData
}