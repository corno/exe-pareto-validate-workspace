import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mfs from "lib-pareto-filesystem"
import * as mgit from "../../git"

export type CgetProjectData = ($d: {
    readonly 'getPackage': glo.FGetPackage
    readonly 'getRemoteData': glo.FGetRemoteData
    readonly 'gitIsClean': mgit.FGitIsClean
    readonly 'readDirectory': mfs.FReadDirectoryOrAbort
}) => glo.FGetProjectData

export type CgetWorkspaceData = ($d: {
    readonly 'getProjectData': glo.FGetProjectData
    readonly 'readDirectory': mfs.FReadDirectoryOrAbort
}) => glo.FGetWorkspaceData

export type API = {
    getProjectData: CgetProjectData
    getWorkspaceData: CgetWorkspaceData
}