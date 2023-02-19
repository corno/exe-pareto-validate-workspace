import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, number
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'imports': d({
        "common": "glo-pareto-common",
        "fp": "lib-fountain-pen",
    }),
    'parameters': d({}),
    'types': d({
        "Graph": type(group({
            "nodes": member(dictionary(group({
                "modifiers": member(group({
                    "fillColor": member(string()),
                    "penWidth": member(number()),
                    "style": member(string()),
                    "label": member(string()),
                    "shape": member(string()),
                })),
            }))),
            "type": member(taggedUnion({
                "digraph": group({}),
                "graph": group({}),
            })),
            "modifiers": member(group({
                "rankDir": member(taggedUnion({
                    "default": group({}),
                    "TB": group({}),
                    "LR": group({}),
                })),
            })),
            "edges": member(array(group({
                "from": member(string()),
                "to": member(string()),
            })))
        })),
        "SerializeData": type(group({
            "graph": member(reference("Graph")),
            "path": member(reference("common", "Path")),
        })),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "Serialize": func(typeReference("SerializeData"), null, null, null),
        "UnboundSerialize": func(typeReference("Graph"), null, interfaceReference("fp", "Block"), null),
        "CreateIdentifier": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"), false)),
    }),
}