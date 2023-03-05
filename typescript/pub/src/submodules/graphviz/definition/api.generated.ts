import * as pt from 'pareto-core-types'


export type serialize = g_this.F.Serialize

export type unboundSerialize = ($d: {
    readonly 'createIdentifier': g_this.F.CreateIdentifier
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.UnboundSerialize

export type API = {
    serialize: serialize
    unboundSerialize: unboundSerialize
}