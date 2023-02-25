import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gfs from "lib-pareto-filesystem"
import * as ggit from "../../git"

export type CgetProjectData = ($d: {
    readonly 'getPackage': gglo.FGetPackage
    readonly 'getRemoteData': gglo.FGetRemoteData
    readonly 'gitIsClean': ggit.FGitIsClean
    readonly 'readDirectory': gfs.FReadDirectoryOrAbort
}) => gglo.FGetProjectData

export type CgetWorkspaceData = ($d: {
    readonly 'getProjectData': gglo.FGetProjectData
    readonly 'readDirectory': gfs.FReadDirectoryOrAbort
}) => gglo.FGetWorkspaceData

export type API = {
    getProjectData: CgetProjectData
    getWorkspaceData: CgetWorkspaceData
}