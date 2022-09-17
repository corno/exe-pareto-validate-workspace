import * as arithmetic from "api-pareto-arithmetic"
import * as uglyStuff from "api-pareto-ugly-stuff"
import * as collation from "api-pareto-collation"
import * as process from "api-pareto-process"
import * as fs from "lib-pareto-filesystem"

export type FFirst3Characters = ($: string) => string

export type DGetData_Dependencies = {
    readonly readDirectory: fs.FReadDirectoryOrAbort,
    readonly readFile: fs.FReadFileOrAbort,
    readonly processCall: process.FCall,
    //readonly registryCache: pa.Cache<TRemoteData | null>
    readonly trimEnd: uglyStuff.FTrimEnd
    readonly jsonparse: uglyStuff.FJSONParse
}

export type DReportGraphvizDependencies = {
    readonly first3Characters: FFirst3Characters
    readonly sortedForEach: collation.FSortedForEach
    readonly dictionaryMaxOrZero: arithmetic.FDictionaryMaxOrZero
}


export type DReportProjectDependencies = {
    readonly arrayIncludes: uglyStuff.FIncludes
    readonly sortedForEach: collation.FSortedForEach
}