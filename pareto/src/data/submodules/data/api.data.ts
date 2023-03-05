import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "getProjectData": algorithm(functionReference("this", {}, "GetProjectData"), constructor(null, {
            "readDirectory": functionReference("fs", {}, "ReadDirectoryOrAbort"),
            "gitIsClean": functionReference("git", {}, "GitIsClean"),
            "getRemoteData": functionReference("this", {}, "GetRemoteData"),
            "getPackage": functionReference("this", {}, "GetPackage"),
            //         //readonly jsonParseStream: uglyStuff.FJSONParseStream
        })),
        "getWorkspaceData": algorithm(functionReference("this", {}, "GetWorkspaceData"), constructor(null, {
            "getProjectData": functionReference("this", {}, "GetProjectData"),
            "readDirectory": functionReference("fs", {}, "ReadDirectoryOrAbort"),
        })),
    }),
}