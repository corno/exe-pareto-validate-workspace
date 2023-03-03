import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, number, optional
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'parameters': d({}),
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
                    "dependencies": member(dictionary(reference("Dependency"))),
                    "devDependencies": member(dictionary(reference("Dependency"))),
                }))),
                "git is clean": member(boolean()),
                "is dirty": member(boolean()),
            })))
        })),


        "Dependency": type(group({
            "local version": member(string()),
            "remote version": member(optional(string())),
            "status": member(taggedUnion({
                "clean": group({}),
                "missing remote": group({}),
                "not at latest version": group({}),
            })),
        }))
    }),
    'interfaces': d({
    }),
    'functions': d({
        "CreateGraphviz": func(typeReference("Workspace"), null, null, data(typeReference("graphviz", "Graph"), false)),
        "Transform": func(typeReference("data", "Workspace"), null, null, data(typeReference("Workspace"), false))
    }),
}