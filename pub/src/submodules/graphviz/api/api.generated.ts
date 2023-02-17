import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mforeach from "res-pareto-foreach"

export type Cserialize = glo.FSerialize

export type CunboundSerialize = ($d: {
    readonly 'createIdentifier': glo.FCreateIdentifier
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
}) => glo.FUnboundSerialize

export type API = {
    serialize: Cserialize
    unboundSerialize: CunboundSerialize
}