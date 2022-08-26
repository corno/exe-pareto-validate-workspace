import * as pt from "pareto-core-types"

export type Overview_Workspace = {
    projects: pt.Dictionary<Overview_Project>
}


export type Overview_Project = {
    parts: pt.Dictionary<Overview_Part>
    gitClean: boolean
    isClean: boolean
}

export type Overview_PartStatus =
    | ["clean", {}]
    | ["missing package", {}]
    | ["invalid package name", {}]
    | ["unpublished", {}]
    | ["fingerprint out of sync", {}]

export type Overview_Part = {
    isPublic: boolean
    version: null | string
    contentFingerprint: null | string
    status: Overview_PartStatus
    dependenciesClean: boolean
    dependencies: pt.Dictionary<Overview_Dependency>
    devDependencies: pt.Dictionary<Overview_Dependency>
}

export type Overview_DepencencyStatus =
    | ["clean", {}]
    | ["missing remote", {}]
    | ["not at latest version", {}]

export type Overview_Dependency = {
    version: string
    remoteversion: string | null
    status: Overview_DepencencyStatus
}