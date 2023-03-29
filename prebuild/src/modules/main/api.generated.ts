import * as pt from 'pareto-core-types'

import * as glo from "./api/types.generated"

import * as g_main from "res-pareto-main"

export namespace A {

export type main = ($: g_main.T.MainData) => void

}

export type API = {
    main: A.main
}