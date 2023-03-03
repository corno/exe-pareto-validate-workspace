import * as pl from 'pareto-core-lib'


import * as api from "../api"

import * as mgraphviz from "../../graphviz"

export const $$: api.CcreateGraphviz = ($) => {
    return {
        'type': ['digraph', {}],
        // 'nodes':
        'nodes': $.projects.map<mgraphviz.T.Graph.nodes.D>(($) => {
            return {
                'modifiers': {
                    'fillColor': "black",
                    'label': "FOO",
                    'penWidth': 4,
                    'shape': "diamond",
                    'style': "foo",
                }
            }
        }),
        'edges': pl.createEmptyArray(),
        'modifiers': {
            'rankDir': ['LR', {}]
        }
    }
}