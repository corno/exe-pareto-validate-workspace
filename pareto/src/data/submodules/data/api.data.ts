import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
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