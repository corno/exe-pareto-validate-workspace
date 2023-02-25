import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gforeach from "res-pareto-foreach"

export type Cserialize = gglo.FSerialize

export type CunboundSerialize = ($d: {
    readonly 'createIdentifier': gglo.FCreateIdentifier
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
}) => gglo.FUnboundSerialize

export type API = {
    serialize: Cserialize
    unboundSerialize: CunboundSerialize
}