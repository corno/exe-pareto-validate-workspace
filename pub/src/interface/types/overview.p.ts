import * as pt from "pareto-core-types"

export type TOverview_Workspace = {
    // readonly "red": string
    // readonly "reset": string
    readonly "projects": pt.Dictionary<TOverview_Project>
}


export type TOverview_Project = {
    readonly "parts": pt.Dictionary<TOverview_Part>
    readonly "gitDirty": boolean
    readonly "isDirty": boolean
}

export type TOverview_PartStatus =
    | ["clean", null]
    | ["missing package", null]
    | ["invalid package name", null]
    | ["unpublished", null]
    | ["fingerprint out of sync", null]
    | ["no remote fingerprint", null]

export type TOverview_Part = {
    readonly "isPublic": boolean
    readonly "version": null | string
    readonly "contentFingerprint": null | string
    readonly "status": TOverview_PartStatus
    readonly "dependenciesDirty": boolean
    readonly "dependencies": pt.Dictionary<TOverview_Dependency>
    readonly "devDependencies": pt.Dictionary<TOverview_Dependency>
}

export type TOverview_DepencencyStatus =
    | ["clean", null]
    | ["missing remote", null]
    | ["not at latest version", null]

export type TOverview_Dependency = {
    readonly "version": string
    readonly "remoteversion": null | string
    readonly "status": TOverview_DepencencyStatus
}