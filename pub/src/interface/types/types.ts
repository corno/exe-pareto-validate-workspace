import * as pa from "pareto-core-types"

export type Part = {
    packageData: PackageData | null
}

export type Project = {
    gitClean: boolean
    parts: pa.Dictionary<Part>
}

export type Workspace = {
    projects: pa.Dictionary<Project>
}

export type PackageData = {
    name: string | null,
    version: string | null,
    contentFingerprint: string | null,
    dependencies: pa.Dictionary<Depencency>
    devDependencies: pa.Dictionary<Depencency>
    remote: RemoteData | null
}


export type RemoteData = {
    latestVersion: null | string
    contentFingerprint: null | string
}

export type Depencency = {
    version: string
    remote: RemoteData | null
}