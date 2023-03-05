import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    nested,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as mapi from "lib-pareto-typescript-project/dist/submodules/api"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: mapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createGitIsClean": algorithm(functionReference("this", {}, "GitIsClean"), constructor(null, {
            "handleError": functionReference("this", {}, "HandleError"),
            "processCall": functionReference("process", {}, "Call"),
            "trimEnd": functionReference("string", {}, "TrimEnd"),
            "joinNestedStrings": functionReference("tostring", {}, "JoinNestedStrings"),
        })),
    }),
}