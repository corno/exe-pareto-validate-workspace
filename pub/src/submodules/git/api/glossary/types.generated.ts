import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GError {}
export type GError = 
    | ['unknown', string]
export type UError = GError

export namespace GGitIsCleanParameters {}
export type GGitIsCleanParameters = {
    readonly 'directory': string
}
export type UGitIsCleanParameters = GGitIsCleanParameters