import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gdata from "../../../data"
import * as ggraphviz from "../../../graphviz"

export namespace T {
    
    export namespace Dependency {
        
        export type local__version = string
        
        export namespace remote__version {
            
            export type O = string
        }
        
        export type remote__version = [ false ] | [ true, string]
        
        export namespace status {
            
            export namespace clean {}
            
            export type clean = {}
            
            export namespace missing__remote {}
            
            export type missing__remote = {}
            
            export namespace not__at__latest__version {}
            
            export type not__at__latest__version = {}
        }
        
        export type status = 
            | ['clean', {}]
            | ['missing remote', {}]
            | ['not at latest version', {}]
    }
    
    export type Dependency = {
        readonly 'local version': string
        readonly 'remote version': [ false ] | [ true, string]
        readonly 'status': 
            | ['clean', {}]
            | ['missing remote', {}]
            | ['not at latest version', {}]
    }
    
    export namespace Workspace {
        
        export namespace projects {
            
            export namespace D {
                
                export type git__is__clean = boolean
                
                export type is__dirty = boolean
                
                export namespace parts {
                    
                    export namespace D {
                        
                        export namespace content__fingerprint {
                            
                            export type O = string
                        }
                        
                        export type content__fingerprint = [ false ] | [ true, string]
                        
                        export namespace dependencies {
                            
                            export type D = T.Dependency
                        }
                        
                        export type dependencies = pt.Dictionary<T.Dependency>
                        
                        export type dependencies__dirty = boolean
                        
                        export namespace devDependencies {
                            
                            export type D = T.Dependency
                        }
                        
                        export type devDependencies = pt.Dictionary<T.Dependency>
                        
                        export type is__public = boolean
                        
                        export namespace status {
                            
                            export namespace clean {}
                            
                            export type clean = {}
                            
                            export namespace fingerprint__out__of__sync {}
                            
                            export type fingerprint__out__of__sync = {}
                            
                            export namespace invalid__package__name {}
                            
                            export type invalid__package__name = {}
                            
                            export namespace missing__package {}
                            
                            export type missing__package = {}
                            
                            export namespace no__remote__fingerprint {}
                            
                            export type no__remote__fingerprint = {}
                            
                            export namespace unpublished {}
                            
                            export type unpublished = {}
                        }
                        
                        export type status = 
                            | ['clean', {}]
                            | ['fingerprint out of sync', {}]
                            | ['invalid package name', {}]
                            | ['missing package', {}]
                            | ['no remote fingerprint', {}]
                            | ['unpublished', {}]
                        
                        export namespace version {
                            
                            export type O = string
                        }
                        
                        export type version = [ false ] | [ true, string]
                    }
                    
                    export type D = {
                        readonly 'content fingerprint': [ false ] | [ true, string]
                        readonly 'dependencies': pt.Dictionary<T.Dependency>
                        readonly 'dependencies dirty': boolean
                        readonly 'devDependencies': pt.Dictionary<T.Dependency>
                        readonly 'is public': boolean
                        readonly 'status': 
                            | ['clean', {}]
                            | ['fingerprint out of sync', {}]
                            | ['invalid package name', {}]
                            | ['missing package', {}]
                            | ['no remote fingerprint', {}]
                            | ['unpublished', {}]
                        readonly 'version': [ false ] | [ true, string]
                    }
                }
                
                export type parts = pt.Dictionary<{
                    readonly 'content fingerprint': [ false ] | [ true, string]
                    readonly 'dependencies': pt.Dictionary<T.Dependency>
                    readonly 'dependencies dirty': boolean
                    readonly 'devDependencies': pt.Dictionary<T.Dependency>
                    readonly 'is public': boolean
                    readonly 'status': 
                        | ['clean', {}]
                        | ['fingerprint out of sync', {}]
                        | ['invalid package name', {}]
                        | ['missing package', {}]
                        | ['no remote fingerprint', {}]
                        | ['unpublished', {}]
                    readonly 'version': [ false ] | [ true, string]
                }>
            }
            
            export type D = {
                readonly 'git is clean': boolean
                readonly 'is dirty': boolean
                readonly 'parts': pt.Dictionary<{
                    readonly 'content fingerprint': [ false ] | [ true, string]
                    readonly 'dependencies': pt.Dictionary<T.Dependency>
                    readonly 'dependencies dirty': boolean
                    readonly 'devDependencies': pt.Dictionary<T.Dependency>
                    readonly 'is public': boolean
                    readonly 'status': 
                        | ['clean', {}]
                        | ['fingerprint out of sync', {}]
                        | ['invalid package name', {}]
                        | ['missing package', {}]
                        | ['no remote fingerprint', {}]
                        | ['unpublished', {}]
                    readonly 'version': [ false ] | [ true, string]
                }>
            }
        }
        
        export type projects = pt.Dictionary<{
            readonly 'git is clean': boolean
            readonly 'is dirty': boolean
            readonly 'parts': pt.Dictionary<{
                readonly 'content fingerprint': [ false ] | [ true, string]
                readonly 'dependencies': pt.Dictionary<T.Dependency>
                readonly 'dependencies dirty': boolean
                readonly 'devDependencies': pt.Dictionary<T.Dependency>
                readonly 'is public': boolean
                readonly 'status': 
                    | ['clean', {}]
                    | ['fingerprint out of sync', {}]
                    | ['invalid package name', {}]
                    | ['missing package', {}]
                    | ['no remote fingerprint', {}]
                    | ['unpublished', {}]
                readonly 'version': [ false ] | [ true, string]
            }>
        }>
    }
    
    export type Workspace = {
        readonly 'projects': pt.Dictionary<{
            readonly 'git is clean': boolean
            readonly 'is dirty': boolean
            readonly 'parts': pt.Dictionary<{
                readonly 'content fingerprint': [ false ] | [ true, string]
                readonly 'dependencies': pt.Dictionary<T.Dependency>
                readonly 'dependencies dirty': boolean
                readonly 'devDependencies': pt.Dictionary<T.Dependency>
                readonly 'is public': boolean
                readonly 'status': 
                    | ['clean', {}]
                    | ['fingerprint out of sync', {}]
                    | ['invalid package name', {}]
                    | ['missing package', {}]
                    | ['no remote fingerprint', {}]
                    | ['unpublished', {}]
                readonly 'version': [ false ] | [ true, string]
            }>
        }>
    }
}