
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pa from "pareto-core-async"

import * as fs from "api-pareto-filesystem"

export type AnnotatedReadDirectoryError = {
    error: fs.TReadDirError
    path: string
}

export function readHandledDirectory(
    $: fs.ReadDirectory_Data,
    $i: {
        onError: ($: AnnotatedReadDirectoryError) => void
    },
    $d: {
        readDirectory: fs.ReadDirectory
    }
): pt.AsyncValue<pt.Dictionary<fs.DirNodeData>> {
    return pa.setCondition(
        $d.readDirectory($),
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

export function createReadHandledDirectory(
    $i: {
        onError: ($: AnnotatedReadDirectoryError) => void
    },
    $d: {
        readDirectory: fs.ReadDirectory
    }
) {
    return (
        $: fs.ReadDirectory_Data,
    ) => {
        return readHandledDirectory($, $i, $d)
    }
}