import * as pd from 'pareto-core-data'

import {
    array, data, dictionary, externalTypeReference, group, imp, member, number, procedure,
    ref, sExternalInterfaceReference, sfunction, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
        "fp": imp({}),
    }),
    'root': {
        'namespaces': d({}),
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
                "graph": member(ref(typeReference("Graph"))),
                "path": member(ref(externalTypeReference("common", "Path"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({

            "Serialize": procedure(data(typeReference("SerializeData")), sExternalInterfaceReference("fp", "Block")),
            //"UnboundSerialize": func(typeReference("Graph"), null, interfaceReference("fp", "Block"), null),
            "CreateIdentifier": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),

        }),
    },
}