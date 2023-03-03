import * as pt from 'pareto-core-types'

import * as gforeach from "res-pareto-foreach"
import * as gthis from "./glossary"

export type Cserialize = gthis.FSerialize

export type CunboundSerialize = ($d: {
    readonly 'createIdentifier': gthis.FCreateIdentifier
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
}) => gthis.FUnboundSerialize

export type API = {
    serialize: Cserialize
    unboundSerialize: CunboundSerialize
}