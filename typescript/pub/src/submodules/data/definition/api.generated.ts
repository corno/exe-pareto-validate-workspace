import * as pt from 'pareto-core-types'

import * as gfs from "lib-pareto-filesystem"
import * as ggit from "../../git"
import * as gthis from "./glossary"

export type CgetProjectData = ($d: {
    readonly 'getPackage': gthis.FGetPackage
    readonly 'getRemoteData': gthis.FGetRemoteData
    readonly 'gitIsClean': ggit.FGitIsClean
    readonly 'readDirectory': gfs.FReadDirectoryOrAbort
}) => gthis.FGetProjectData

export type CgetWorkspaceData = ($d: {
    readonly 'getProjectData': gthis.FGetProjectData
    readonly 'readDirectory': gfs.FReadDirectoryOrAbort
}) => gthis.FGetWorkspaceData

export type API = {
    getProjectData: CgetProjectData
    getWorkspaceData: CgetWorkspaceData
}