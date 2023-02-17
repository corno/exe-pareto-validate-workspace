import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mdata from "../../../data"
import * as mgraphviz from "../../../graphviz"

export type FCreateGraphviz = ($: T.Workspace,) => mgraphviz.T.Graph

export type FTransform = ($: mdata.T.Workspace,) => T.Workspace