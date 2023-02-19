import * as pd from 'pareto-core-data'

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': glossary,
    'api': {
        'imports': d({
            "fs": "lib-pareto-filesystem",
            "git": "../../git",
        }),
        'algorithms': d({
            "getProjectData": algorithm(definitionReference("GetProjectData"), constructor(null, {
                "readDirectory": definitionReference("fs", {}, "ReadDirectoryOrAbort"),
                "gitIsClean": definitionReference("git", {}, "GitIsClean"),
                "getRemoteData": definitionReference("GetRemoteData"),
                "getPackage": definitionReference("GetPackage"),
                //         //readonly jsonParseStream: uglyStuff.FJSONParseStream
            })),
            "getWorkspaceData": algorithm(definitionReference("GetWorkspaceData"), constructor(null, {
                "getProjectData": definitionReference("GetProjectData"),
                "readDirectory": definitionReference("fs", {}, "ReadDirectoryOrAbort")
            })),
        })
    },
}
