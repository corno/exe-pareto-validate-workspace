import * as pd from 'pareto-core-data'

import { algorithm, dependent, afunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "getProjectData": algorithm(afunction("this", {}, "GetProjectData"), {}, dependent(null, {
            "readDirectory": afunction("fs", {}, "ReadDirectoryOrAbort"),
            "gitIsClean": afunction("git", {}, "GitIsClean"),
            "getRemoteData": afunction("this", {}, "GetRemoteData"),
            "getPackage": afunction("this", {}, "GetPackage"),
            //         //readonly jsonParseStream: uglyStuff.FJSONParseStream
        }, {})),
        "getWorkspaceData": algorithm(afunction("this", {}, "GetWorkspaceData"), {}, dependent(null, {
            "getProjectData": afunction("this", {}, "GetProjectData"),
            "readDirectory": afunction("fs", {}, "ReadDirectoryOrAbort"),
        }, {})),
    }),
}