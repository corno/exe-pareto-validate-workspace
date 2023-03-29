import * as pd from 'pareto-core-data'

import {
    boolean, data, dictionary, externalTypeReference, group,
    imp,
    member, optional, ref, sfunction, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "graphviz": imp({}),
        "data": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Workspace": type(group({
                "projects": member(dictionary(group({

                    "parts": member(dictionary(group({
                        "is public": member(boolean()),
                        "version": member(optional(string())),
                        "content fingerprint": member(optional(string())),
                        "status": member(taggedUnion({
                            "clean": group({}),
                            "missing package": group({}),
                            "invalid package name": group({}),
                            "unpublished": group({}),
                            "fingerprint out of sync": group({}),
                            "no remote fingerprint": group({}),
                        })),
                        "dependencies dirty": member(boolean()),
                        "dependencies": member(dictionary(ref(typeReference("Dependency")))),
                        "devDependencies": member(dictionary(ref(typeReference("Dependency")))),
                    }))),
                    "git is clean": member(boolean()),
                    "is dirty": member(boolean()),
                }))),
            })),


            "Dependency": type(group({
                "local version": member(string()),
                "remote version": member(optional(string())),
                "status": member(taggedUnion({
                    "clean": group({}),
                    "missing remote": group({}),
                    "not at latest version": group({}),
                })),
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

            "CreateGraphviz": sfunction(externalTypeReference("graphviz", "Graph"), data(typeReference("Workspace"))),
            "Transform": sfunction(typeReference("Workspace"), data(externalTypeReference("data", "Workspace"))),

        }),
    },
}