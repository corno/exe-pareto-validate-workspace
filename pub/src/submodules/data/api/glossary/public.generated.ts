import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FGetPackage = ($: gcommon.T.Null,) => pt.AsyncValue<T.PackageData>

export type FGetProjectData = ($: T.GetProjectDataConfig,) => pt.AsyncValue<T.Project>

export type FGetRemoteData = ($: gcommon.T.String,) => pt.AsyncValue<T.OptionalRemoteData>

export type FGetWorkspaceData = ($: gcommon.T.Path,) => pt.AsyncValue<T.Workspace>