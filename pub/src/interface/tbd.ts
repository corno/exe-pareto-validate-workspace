import * as pt from "pareto-core-types"
import * as pa from "pareto-core-async"

import * as process from "api-pareto-process"
import * as uglyStuff from "api-pareto-ugly-stuff"
import * as fs from "lib-pareto-filesystem"

import { Workspace, RemoteData, Project } from "./types/types"
import { Overview_Workspace } from "./types/overview"
import { GetData_Interfaces } from "../imp/getProjectData"
import { HTTPSResource } from "../imp/move/httpsCall"

export type GetData_Dependencies = {
    readDirectory: fs.ReadDirectoryOrAbort,
    readFile: fs.ReadFileOrAbort,
    processCall: process.Call,
    registryCache: pa.Cache<RemoteData | null>
    trimEnd: uglyStuff.TrimEnd
    jsonparse: uglyStuff.JSONParse
}

export type GetWorkspaceData = (
    $: {
        rootDir: string,
    },
    $i: {
        error: (message: string) => void,
    },
    $d: GetData_Dependencies
) => pt.AsyncValue<Workspace>

export type GetProjectData = (
    $: {
        name: string,
        projectDir: string,
    },
    $i: GetData_Interfaces,
    $d: GetData_Dependencies,
) => pt.AsyncValue<Project>

export type RegistryCache = pa.Cache<RemoteData | null>

export type CreateRegistryCache = (
    $i: {
        // error: (message: string) => void,
    },
    $d: {
        httpsResource: HTTPSResource,
        JSONParse: uglyStuff.JSONParse
    }
) => pa.Cache<RemoteData | null>

export type ReportGraphviz = (
    $: Overview_Workspace,
    $i: {
        log: (message: string) => void
    },
    $d: {
        substr: uglyStuff.SubStr
        max: uglyStuff.Max
    }
) => void

export type ReportProjects = (
    $: Overview_Workspace,
    $i: {
        log: (message: string) => void
    },
    $d: {
        arrayIncludes: (array: string[], value: string) => boolean
    }
) => void

export type Transform = (
    $: Workspace,
) => Overview_Workspace