import * as pt from "pareto-core-types"

export type TPart = {
    readonly "packageData": null | TPackageData
}

export type TProject = {
    readonly "gitDirty": boolean
    readonly "parts": pt.Dictionary<TPart>
}

export type TWorkspace = {
    readonly "projects": pt.Dictionary<TProject>
}

export type TPackageData = {
    readonly "name": null | string,
    readonly "version": null | string,
    readonly "contentFingerprint": null | string,
    readonly "dependencies": pt.Dictionary<TDepencency>
    readonly "devDependencies": pt.Dictionary<TDepencency>
    readonly "remote": null | TRemoteData
}


export type TRemoteData = {
    readonly "latestVersion": null | string
    readonly "contentFingerprint": null | string
}

export type TDepencency = {
    readonly "version": string
    readonly "remote": null | TRemoteData
}