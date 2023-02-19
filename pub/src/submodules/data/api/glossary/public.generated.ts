import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FGetPackage = ($: mcommon.T.Null,) => pt.AsyncValue<T.PackageData>

export type FGetProjectData = ($: T.GetProjectDataConfig,) => pt.AsyncValue<T.Project>

export type FGetRemoteData = ($: mcommon.T.String,) => pt.AsyncValue<T.OptionalRemoteData>

export type FGetWorkspaceData = ($: mcommon.T.Path,) => pt.AsyncValue<T.Workspace>