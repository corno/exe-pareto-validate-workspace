import * as pt from "pareto-core-types"
import * as pa from "pareto-core-async"

import * as uglyStuff from "api-pareto-ugly-stuff"

import { TWorkspace, TRemoteData, TProject } from "../types/types"
import { TOverview_Workspace } from "../types/overview"
import { DGetData_Dependencies, DReportGraphvizDependencies, DReportProjectDependencies } from "../dependencies/x"
import { XHTTPSResource } from "../../modules/httsp"

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
        readonly "httpsResource": XHTTPSResource,
        readonly "JSONParse": uglyStuff.JSONParse
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
