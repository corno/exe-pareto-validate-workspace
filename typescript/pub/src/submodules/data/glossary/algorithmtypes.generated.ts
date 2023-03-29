import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {
        
        
        export namespace F {
            export type GetPackage = ($: g_common.T.Null) => pt.AsyncValue<T.PackageData>
        }
        
        
        export namespace F {
            export type GetProjectData = ($: T.GetProjectDataConfig) => pt.AsyncValue<T.Project>
        }
        
        
        export namespace F {
            export type GetRemoteData = ($: g_common.T.String) => pt.AsyncValue<T.OptionalRemoteData>
        }
        
        
        export namespace F {
            export type GetWorkspaceData = ($: g_common.T.Path) => pt.AsyncValue<T.Workspace>
        }
    }
}

export namespace SYNC {}