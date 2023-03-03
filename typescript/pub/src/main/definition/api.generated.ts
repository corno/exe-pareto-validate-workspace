import * as pt from 'pareto-core-types'

import * as gmain from "res-pareto-main"

export type CgenerateGraphviz = gmain.FMain

export type CvalidateWorkspace = gmain.FMain

export type API = {
    generateGraphviz: CgenerateGraphviz
    validateWorkspace: CvalidateWorkspace
}