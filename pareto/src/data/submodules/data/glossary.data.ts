import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, number, optional
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.wrapRawDictionary

export const $: mglossary.T.Glossary<string> = {
    'imports': d({
        "common": "glo-pareto-common",
    }),
    'parameters': d({}),
    'types': d({
        "Workspace": type(group({
            "projects": member(dictionary(reference("Project")))
        })),
        "Project": type(group({
            "git is clean": member(boolean()),
            "parts": member(dictionary(group({
                "packageData": member(optional(group({
                    "name": member(optional(string())),
                    "version": member(optional(string())),
                    "content fingerprint": member(optional(string())),
                    "dependencies": member(dictionary(reference("Dependency"))),
                    "devDependencies": member(dictionary(reference("Dependency"))),
                    "remote": member(optional(reference("RemoteData"))),
                })))
            })))
        })),
        "Dependency": type(group({
            "version": member(string()),
            "remote": member(optional(reference("RemoteData")))
        })),
        "RemoteData": type(group({
            "latest version": member(optional(string())),
            "content fingerprint": member(optional(string())),
        })),
    }),
    'interfaces': d({
    }),
    'functions': d({
    }),
}