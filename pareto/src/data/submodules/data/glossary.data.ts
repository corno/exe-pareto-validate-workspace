import * as pd from 'pareto-core-data'

import {
    afunction, boolean, dictionary, externalTypeReference, group,
    imp,
    member, optional, ref, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Workspace": type(group({
                "projects": member(dictionary(ref(typeReference("Project")))),
            })),
            "Project": type(group({
                "git is clean": member(boolean()),
                "parts": member(dictionary(group({
                    "packageData": member(optional(group({
                        "name": member(optional(string())),
                        "version": member(optional(string())),
                        "content fingerprint": member(optional(string())),
                        "dependencies": member(dictionary(ref(typeReference("Dependency")))),
                        "devDependencies": member(dictionary(ref(typeReference("Dependency")))),
                        "remote": member(optional(ref(typeReference("RemoteData")))),
                    }))),
                }))),
            })),
            "Dependency": type(group({
                "version": member(string()),
                "remote": member(optional(ref(typeReference("RemoteData")))),
            })),
            "RemoteData": type(group({
                "latest version": member(optional(string())),
                "content fingerprint": member(optional(string())),
            })),

            "GetProjectDataConfig": type(group({
                "name": member(string()),
                "path": member(ref(externalTypeReference("common", "Path"))),
            })),
            "OptionalRemoteData": type(optional(ref(typeReference("RemoteData")))),
            "PackageData": type(group({
                "name": member(string()),
                "version": member(string()),
                "content-fingerprint": member(string()),
                "dependencies": member(dictionary(string())),
                "devDependencies": member(dictionary(string())),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "GetRemoteData": afunction(typeReference("OptionalRemoteData"), externalTypeReference("common", "String")),
            "GetPackage": afunction(typeReference("PackageData"), externalTypeReference("common", "Null")),
            "GetProjectData": afunction(typeReference("Project"), typeReference("GetProjectDataConfig")),
            "GetWorkspaceData": afunction(typeReference("Workspace"), externalTypeReference("common", "Path")),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}