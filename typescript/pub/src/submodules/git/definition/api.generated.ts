import * as pt from 'pareto-core-types'

import * as g_process from "res-pareto-process"
import * as g_string from "res-pareto-string"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export type createGitIsClean = ($d: {
    readonly 'handleError': g_this.F.HandleError
    readonly 'joinNestedStrings': g_tostring.F.JoinNestedStrings
    readonly 'processCall': g_process.F.Call
    readonly 'trimEnd': g_string.F.TrimEnd
}) => g_this.F.GitIsClean

export type API = {
    createGitIsClean: createGitIsClean
}