import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace I {}

export namespace B {}

export namespace F {
    
    export type CreateIdentifier = ($: g_common.T.String,) => g_common.T.String
    
    export type Serialize = ($: T.SerializeData,) => void
}