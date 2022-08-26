import * as pt from "pareto-core-types"
import * as hfs from "api-pareto-handledfilesystem"
import * as processAPI from "api-pareto-process"
import * as pa from "pareto-core-async" //shouldn't be included in an interface
import { Workspace, RemoteData, Project } from "./types/types"
import * as https from "api-pareto-https"
import * as uglyStuff from "api-pareto-ugly-stuff"
import { Overview_Workspace } from "./types/overview"
import { GetData_Interfaces } from "../imp/getProjectData"

export type HTTPCall = (
    $: https.CreateHTTPSResource_Data
) => pt.AsyncValue<string>


export type GetData_Dependencies = {
    readDirectory: hfs.Directory,
    readFile: hfs.File,
    processCall: processAPI.Call,
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
        httpsCall: HTTPCall,
        JSONParse: uglyStuff.JSONParse
    }
) => pa.Cache<RemoteData | null>

export type ReportGraphviz = (
    $: Overview_Workspace,
    $i: {
        log: (message: string) => void
    },
    $d: {
        strLen: uglyStuff.StringLength
        substr: uglyStuff.SubStr
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