import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"

export namespace T {
    
    export namespace Graph {
        
        export namespace edges {
            
            export namespace A {
                
                export type _lfrom = string
                
                export type to = string
            }
            
            export type A = {
                readonly 'from': string
                readonly 'to': string
            }
        }
        
        export type edges = pt.Array<{
            readonly 'from': string
            readonly 'to': string
        }>
        
        export namespace modifiers {
            
            export namespace rankDir {
                
                export namespace _ldefault {}
                
                export type _ldefault = {}
                
                export namespace LR {}
                
                export type LR = {}
                
                export namespace TB {}
                
                export type TB = {}
            }
            
            export type rankDir = 
                | ['default', {}]
                | ['LR', {}]
                | ['TB', {}]
        }
        
        export type modifiers = {
            readonly 'rankDir': 
                | ['default', {}]
                | ['LR', {}]
                | ['TB', {}]
        }
        
        export namespace nodes {
            
            export namespace D {
                
                export namespace modifiers {
                    
                    export type fillColor = string
                    
                    export type label = string
                    
                    export type penWidth = number
                    
                    export type shape = string
                    
                    export type style = string
                }
                
                export type modifiers = {
                    readonly 'fillColor': string
                    readonly 'label': string
                    readonly 'penWidth': number
                    readonly 'shape': string
                    readonly 'style': string
                }
            }
            
            export type D = {
                readonly 'modifiers': {
                    readonly 'fillColor': string
                    readonly 'label': string
                    readonly 'penWidth': number
                    readonly 'shape': string
                    readonly 'style': string
                }
            }
        }
        
        export type nodes = pt.Dictionary<{
            readonly 'modifiers': {
                readonly 'fillColor': string
                readonly 'label': string
                readonly 'penWidth': number
                readonly 'shape': string
                readonly 'style': string
            }
        }>
        
        export namespace _ltype {
            
            export namespace digraph {}
            
            export type digraph = {}
            
            export namespace graph {}
            
            export type graph = {}
        }
        
        export type _ltype = 
            | ['digraph', {}]
            | ['graph', {}]
    }
    
    export type Graph = {
        readonly 'edges': pt.Array<{
            readonly 'from': string
            readonly 'to': string
        }>
        readonly 'modifiers': {
            readonly 'rankDir': 
                | ['default', {}]
                | ['LR', {}]
                | ['TB', {}]
        }
        readonly 'nodes': pt.Dictionary<{
            readonly 'modifiers': {
                readonly 'fillColor': string
                readonly 'label': string
                readonly 'penWidth': number
                readonly 'shape': string
                readonly 'style': string
            }
        }>
        readonly 'type': 
            | ['digraph', {}]
            | ['graph', {}]
    }
    
    export namespace SerializeData {
        
        export type graph = T.Graph
        
        export type path = gcommon.T.Path
    }
    
    export type SerializeData = {
        readonly 'graph': T.Graph
        readonly 'path': gcommon.T.Path
    }
}