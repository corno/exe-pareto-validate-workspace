import * as pt from 'pareto-core-types'

import * as gprocess from "res-pareto-process"
import * as gstring from "res-pareto-string"
import * as gthis from "./glossary"
import * as gtostring from "res-pareto-tostring"

export type CcreateGitIsClean = ($d: {
    readonly 'handleError': gthis.FHandleError
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
    readonly 'processCall': gprocess.FCall
    readonly 'trimEnd': gstring.FTrimEnd
}) => gthis.FGitIsClean

export type API = {
    createGitIsClean: CcreateGitIsClean
}