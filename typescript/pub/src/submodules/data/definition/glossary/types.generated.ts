import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace Dependency {
        
        export namespace remote {
            
            export type O = T.RemoteData
        }
        
        export type remote = [ false ] | [ true, T.RemoteData]
        
        export type version = string
    }
    
    export type Dependency = {
        readonly 'remote': [ false ] | [ true, T.RemoteData]
        readonly 'version': string
    }
    
    export namespace GetProjectDataConfig {
        
        export type name = string
        
        export type path = g_common.T.Path
    }
    
    export type GetProjectDataConfig = {
        readonly 'name': string
        readonly 'path': g_common.T.Path
    }
    
    export namespace OptionalRemoteData {
        
        export type O = T.RemoteData
    }
    
    export type OptionalRemoteData = [ false ] | [ true, T.RemoteData]
    
    export namespace PackageData {
        
        export type content_mifingerprint = string
        
        export namespace dependencies {
            
            export type D = string
        }
        
        export type dependencies = pt.Dictionary<string>
        
        export namespace devDependencies {
            
            export type D = string
        }
        
        export type devDependencies = pt.Dictionary<string>
        
        export type name = string
        
        export type version = string
    }
    
    export type PackageData = {
        readonly 'content-fingerprint': string
        readonly 'dependencies': pt.Dictionary<string>
        readonly 'devDependencies': pt.Dictionary<string>
        readonly 'name': string
        readonly 'version': string
    }
    
    export namespace Project {
        
        export type git__is__clean = boolean
        
        export namespace parts {
            
            export namespace D {
                
                export namespace packageData {
                    
                    export namespace O {
                        
                        export namespace content__fingerprint {
                            
                            export type O = string
                        }
                        
                        export type content__fingerprint = [ false ] | [ true, string]
                        
                        export namespace dependencies {
                            
                            export type D = T.Dependency
                        }
                        
                        export type dependencies = pt.Dictionary<T.Dependency>
                        
                        export namespace devDependencies {
                            
                            export type D = T.Dependency
                        }
                        
                        export type devDependencies = pt.Dictionary<T.Dependency>
                        
                        export namespace name {
                            
                            export type O = string
                        }
                        
                        export type name = [ false ] | [ true, string]
                        
                        export namespace remote {
                            
                            export type O = T.RemoteData
                        }
                        
                        export type remote = [ false ] | [ true, T.RemoteData]
                        
                        export namespace version {
                            
                            export type O = string
                        }
                        
                        export type version = [ false ] | [ true, string]
                    }
                    
                    export type O = {
                        readonly 'content fingerprint': [ false ] | [ true, string]
                        readonly 'dependencies': pt.Dictionary<T.Dependency>
                        readonly 'devDependencies': pt.Dictionary<T.Dependency>
                        readonly 'name': [ false ] | [ true, string]
                        readonly 'remote': [ false ] | [ true, T.RemoteData]
                        readonly 'version': [ false ] | [ true, string]
                    }
                }
                
                export type packageData = [ false ] | [ true, {
                    readonly 'content fingerprint': [ false ] | [ true, string]
                    readonly 'dependencies': pt.Dictionary<T.Dependency>
                    readonly 'devDependencies': pt.Dictionary<T.Dependency>
                    readonly 'name': [ false ] | [ true, string]
                    readonly 'remote': [ false ] | [ true, T.RemoteData]
                    readonly 'version': [ false ] | [ true, string]
                }]
            }
            
            export type D = {
                readonly 'packageData': [ false ] | [ true, {
                    readonly 'content fingerprint': [ false ] | [ true, string]
                    readonly 'dependencies': pt.Dictionary<T.Dependency>
                    readonly 'devDependencies': pt.Dictionary<T.Dependency>
                    readonly 'name': [ false ] | [ true, string]
                    readonly 'remote': [ false ] | [ true, T.RemoteData]
                    readonly 'version': [ false ] | [ true, string]
                }]
            }
        }
        
        export type parts = pt.Dictionary<{
            readonly 'packageData': [ false ] | [ true, {
                readonly 'content fingerprint': [ false ] | [ true, string]
                readonly 'dependencies': pt.Dictionary<T.Dependency>
                readonly 'devDependencies': pt.Dictionary<T.Dependency>
                readonly 'name': [ false ] | [ true, string]
                readonly 'remote': [ false ] | [ true, T.RemoteData]
                readonly 'version': [ false ] | [ true, string]
            }]
        }>
    }
    
    export type Project = {
        readonly 'git is clean': boolean
        readonly 'parts': pt.Dictionary<{
            readonly 'packageData': [ false ] | [ true, {
                readonly 'content fingerprint': [ false ] | [ true, string]
                readonly 'dependencies': pt.Dictionary<T.Dependency>
                readonly 'devDependencies': pt.Dictionary<T.Dependency>
                readonly 'name': [ false ] | [ true, string]
                readonly 'remote': [ false ] | [ true, T.RemoteData]
                readonly 'version': [ false ] | [ true, string]
            }]
        }>
    }
    
    export namespace RemoteData {
        
        export namespace content__fingerprint {
            
            export type O = string
        }
        
        export type content__fingerprint = [ false ] | [ true, string]
        
        export namespace latest__version {
            
            export type O = string
        }
        
        export type latest__version = [ false ] | [ true, string]
    }
    
    export type RemoteData = {
        readonly 'content fingerprint': [ false ] | [ true, string]
        readonly 'latest version': [ false ] | [ true, string]
    }
    
    export namespace Workspace {
        
        export namespace projects {
            
            export type D = T.Project
        }
        
        export type projects = pt.Dictionary<T.Project>
    }
    
    export type Workspace = {
        readonly 'projects': pt.Dictionary<T.Project>
    }
}