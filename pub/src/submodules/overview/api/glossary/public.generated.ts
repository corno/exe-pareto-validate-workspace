import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gdata from "../../../data"
import * as ggraphviz from "../../../graphviz"

export type FCreateGraphviz = ($: T.Workspace,) => ggraphviz.T.Graph

export type FTransform = ($: gdata.T.Workspace,) => T.Workspace