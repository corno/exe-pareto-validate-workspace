import * as pt from 'pareto-core-types'

import * as g_main from "res-pareto-main"

export type generateGraphviz = g_main.F.Main

export type validateWorkspace = g_main.F.Main

export type API = {
    generateGraphviz: generateGraphviz
    validateWorkspace: validateWorkspace
}