import * as pt from 'pareto-core-types'
import * as async from "api-pareto-async"


import { TWorkspace, TRemoteData, TProject } from "../types/types.p"
import { TOverview_Workspace } from "../types/overview.p"

import * as https from "api-pareto-https"
import * as main from "api-pareto-main"
import * as exe from "lib-pareto-exe"

export type FGitIsClean = (
    $: {
        readonly "directory": string,
    },
) => pt.AsyncValue<boolean>


export type FCreateErrorHandledGitIsClean = (
    $i: {
        readonly error: ($:
            | ["unknown", string]
        ) => void,
    },
) => FGitIsClean


export type FGetProjectData = (
    $: {
        readonly "name": string,
        readonly "projectDir": string,
    },
    // $i: {
    //     readonly error: ($: string) => void,
    // },
) => pt.AsyncValue<TProject>


export type FCreateErrorHandledGetProjectData = (
    $i: {
        readonly error: ($: string
        ) => void,
    },
) => FGetProjectData

export type FGetWorkspaceData = (
    $: {
        readonly "rootDir": pt.Nested<string>,
    },
) => pt.AsyncValue<TWorkspace>



export type FCreateRegistryCache = (
    $i: {
        // error: (message: string) => void,
    },
) => async.FGetAsyncData<string, TRemoteData | null>


export type FGenerateGraphviz = (
    $: {
        readonly "arguments": main.TArguments
        readonly "registryData": https.THostConfiguration
    },
    $i: {
        readonly "log": exe.ILog
        readonly "logError": exe.ILog
    }
) => void

export type PReportGraphviz = (
    $: TOverview_Workspace,
    $i: {
        readonly "log": ($: string) => void
    },
) => void


export type PReportProjects = (
    $: {
        readonly "workspace": TOverview_Workspace
    },
    $i: {
        readonly "log": ($: string) => void
    },
) => void


export type FTransform = ($: TWorkspace) => TOverview_Workspace