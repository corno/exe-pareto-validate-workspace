import * as pt from 'pareto-core-types'

import * as g_fs from "lib-pareto-filesystem"
import * as g_git from "../../git"
import * as g_this from "./glossary"

export type getProjectData = ($d: {
    readonly 'getPackage': g_this.F.GetPackage
    readonly 'getRemoteData': g_this.F.GetRemoteData
    readonly 'gitIsClean': g_git.F.GitIsClean
    readonly 'readDirectory': g_fs.F.ReadDirectoryOrAbort
}) => g_this.F.GetProjectData

export type getWorkspaceData = ($d: {
    readonly 'getProjectData': g_this.F.GetProjectData
    readonly 'readDirectory': g_fs.F.ReadDirectoryOrAbort
}) => g_this.F.GetWorkspaceData

export type API = {
    getProjectData: getProjectData
    getWorkspaceData: getWorkspaceData
}