import * as pd from 'pareto-core-data'

import { afunction, algorithm, aSideEffect, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"


const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createGitIsClean": algorithm(afunction("this", {}, "GitIsClean"), {}, dependent(null, {
            "processCall": afunction("process", {}, "Call"),
            "trimEnd": sfunction("string", {}, "TrimEnd"),
            "joinNestedStrings": sfunction("tostring", {}, "JoinNestedStrings"),
        }, {
            "handleError": aSideEffect("this", {}, "HandleError"),
        })),
    }),
}