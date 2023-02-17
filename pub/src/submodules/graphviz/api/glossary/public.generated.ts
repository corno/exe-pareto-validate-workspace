import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"

export type FCreateIdentifier = ($: mcommon.T.String,) => mcommon.T.String

export type FSerialize = ($: T.SerializeData,) => void

export type FUnboundSerialize = ($: T.Graph, $i: mfp.IBlock,) => void