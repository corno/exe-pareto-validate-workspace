import * as pt from "pareto-core-types"

import * as uglyStuff from "api-pareto-ugly-stuff"

import { TWorkspace, TRemoteData, TProject } from "../types/types.p"
import { TOverview_Workspace } from "../types/overview.p"
import { DGetData_Dependencies, DReportGraphvizDependencies, DReportProjectDependencies } from "../dependencies/dependencies.p"
import { FHTTPSResource } from "../../modules/httsp"

export type FGetWorkspaceData = (
    $: {
        readonly "rootDir": string,
    },
    $i: {
        readonly "error": ($: string) => void,
    },
    $d: DGetData_Dependencies
) => pt.AsyncValue<TWorkspace>

export type FGetProjectData = (
    $: {
        readonly "name": string,
        readonly "projectDir": string,
    },
    $i: {
        readonly error: ($: string) => void,
    },
    $d: DGetData_Dependencies,
) => pt.AsyncValue<TProject>


export type FCreateRegistryCache = (
    $i: {
        // error: (message: string) => void,
    },
    $d: {
        readonly "httpsResource": FHTTPSResource,
        readonly "JSONParse": uglyStuff.FJSONParse
    }
) => pa.Cache<TRemoteData | null>

export type PReportGraphviz = (
    $: TOverview_Workspace,
    $i: {
        readonly "log": ($: string) => void
    },
    $d: DReportGraphvizDependencies
) => void


export type PReportProjects = (
    $: TOverview_Workspace,
    $i: {
        readonly "log": ($: string) => void
    },
    $d: DReportProjectDependencies
) => void
