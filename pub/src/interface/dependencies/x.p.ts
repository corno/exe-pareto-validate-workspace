import * as arithmetic from "api-pareto-arithmetic"
import * as uglyStuff from "api-pareto-ugly-stuff"
import * as collation from "api-pareto-collation"
import * as process from "api-pareto-process"
import * as fs from "lib-pareto-filesystem"

//export type FFirst3Characters = ($: string) => string

export type DGetData_Dependencies = {
    readonly readDirectory: fs.ReadDirectoryOrAbort,
    readonly readFile: fs.ReadFileOrAbort,
    readonly processCall: process.Call,
    //readonly registryCache: pa.Cache<TRemoteData | null>
    readonly trimEnd: uglyStuff.TrimEnd
    readonly jsonparse: uglyStuff.JSONParse
}

export type DReportGraphvizDependencies = {
    readonly first3Characters: FFirst3Characters
    readonly sortedForEach: collation.XSortedForEach
    readonly dictionaryMaxOrZero: arithmetic.FDictionaryMaxOrZero
}


export type DReportProjectDependencies = {
    readonly arrayIncludes: uglyStuff.Includes
    readonly sortedForEach: collation.XSortedForEach
}