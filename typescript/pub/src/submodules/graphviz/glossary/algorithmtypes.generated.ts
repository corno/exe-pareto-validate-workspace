import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type CreateIdentifier = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace P {
            export type Serialize = ($: T.SerializeData, $i: g_fp.SYNC.I.Block) => void
        }
    }
}