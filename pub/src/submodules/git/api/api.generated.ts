import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mmain from "res-pareto-main"
import * as mprocess from "res-pareto-process"
import * as mstring from "res-pareto-string"

export type CcreateGitIsClean = ($d: {
    readonly 'handleError': glo.FHandleError
    readonly 'processCall': mprocess.FCall
    readonly 'trimEnd': mstring.FTrimEnd
}) => glo.FGitIsClean

export type API = {
    createGitIsClean: CcreateGitIsClean
}