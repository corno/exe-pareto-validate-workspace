import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mmain from "res-pareto-main"

export type CgenerateGraphviz = mmain.FMain

export type CvalidateWorkspace = mmain.FMain

export type API = {
    generateGraphviz: CgenerateGraphviz
    validateWorkspace: CvalidateWorkspace
}