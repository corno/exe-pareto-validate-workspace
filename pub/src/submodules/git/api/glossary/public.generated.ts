import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TError = t.UError

export type TGitIsCleanParameters = t.UGitIsCleanParameters

export type FGitIsClean = ($: TGitIsCleanParameters,) => pt.AsyncValue<mcommon.TBoolean>

export type FHandleError = ($: TError,) => void