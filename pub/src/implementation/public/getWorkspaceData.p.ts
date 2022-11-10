import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import * as fsLib from "lib-pareto-filesystem"


export function f_getWorkspaceData(
    $d: {
        readonly readDirectory: fsLib.FReadDirectoryOrAbort,
        readonly getProjectData: api.FGetProjectData,
    },
): api.FGetWorkspaceData {
    return (
        $, $i
    ) => {
        return $d.readDirectory(
            {
                path: $.rootDir
            },
        ).map(($) => {
            return $.asyncMap(($, key) => {
                return $d.getProjectData(
                    {
                        name: key,
                        projectDir: $.path,
                    },
                    $i,
                )
            }).map(($) => {
                return pl.asyncValue({
                    projects: $
                })
            })
        })
    }
}