import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type GetPackage = ($: g_common.T.Null,) => pt.AsyncValue<T.PackageData>
    
    export type GetProjectData = ($: T.GetProjectDataConfig,) => pt.AsyncValue<T.Project>
    
    export type GetRemoteData = ($: g_common.T.String,) => pt.AsyncValue<T.OptionalRemoteData>
    
    export type GetWorkspaceData = ($: g_common.T.Path,) => pt.AsyncValue<T.Workspace>
}