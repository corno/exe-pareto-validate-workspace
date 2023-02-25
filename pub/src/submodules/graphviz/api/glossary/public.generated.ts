import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"

export type FCreateIdentifier = ($: gcommon.T.String,) => gcommon.T.String

export type FSerialize = ($: T.SerializeData,) => void

export type FUnboundSerialize = ($: T.Graph, $i: gfp.IBlock,) => void