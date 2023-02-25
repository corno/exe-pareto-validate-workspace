import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gmain from "res-pareto-main"
import * as gprocess from "res-pareto-process"
import * as gstring from "res-pareto-string"
import * as gtostring from "res-pareto-tostring"

export type CcreateGitIsClean = ($d: {
    readonly 'handleError': gglo.FHandleError
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
    readonly 'processCall': gprocess.FCall
    readonly 'trimEnd': gstring.FTrimEnd
}) => gglo.FGitIsClean

export type API = {
    createGitIsClean: CcreateGitIsClean
}