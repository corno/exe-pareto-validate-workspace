
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pa from "pareto-core-async"

import * as fs from "res-pareto-filesystem"
import * as fsAPI from "api-pareto-filesystem"


export type AnnotatedReadFileError = {
    error: fsAPI.TReadFileError
    path: string
}

export function readHandledFile(
    $: fsAPI.ReadFile_Data,
    $i: {
        onError: ($: AnnotatedReadFileError) => void
    },
    $d: {
        readFile: fsAPI.ReadFile
    }
): pt.AsyncValue<string> {
    return pa.setCondition(
        $d.readFile($),
        (result) => {
            switch (result[0]) {
                case "error":
                    return pl.cc(result[1], ($) => {
                        $i.onError($)
                        return undefined
                    })
                case "success":
                    return pl.cc(result[1], ($) => {
                        return pa.value($)
                    })
                default: return pl.au(result[0])
            }
        }
    )
}

export function createReadHandledFile(
    $i: {
        onError: ($: AnnotatedReadFileError) => void
    },
    $d: {
        readFile: fsAPI.ReadFile
    }
) {
    return (
        $: fsAPI.ReadDirectory_Data,
    ) => {
        return readHandledFile($, $i, $d)
    }
}