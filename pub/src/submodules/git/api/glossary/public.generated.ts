import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FGitIsClean = ($: T.GitIsCleanParameters,) => pt.AsyncValue<gcommon.T.Boolean>

export type FHandleError = ($: T.Error,) => void