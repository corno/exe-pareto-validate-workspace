import * as pt from 'pareto-core-types'


export namespace D {
    
    
    export type unboundSerialize = {
        readonly 'createIdentifier': g_this.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
}

export namespace A {
    
    export type serialize = () => g_this.SYNC.A.P.Serialize
    
    export type unboundSerialize = ($d: D.unboundSerialize, ) => g_this.SYNC.A.P.UnboundSerialize
}

export type API = {
    readonly 'serialize': A.serialize
    readonly 'unboundSerialize': A.unboundSerialize
}