
import * as api from "../interface"

import * as pa from "pareto-core-async"

import { getProjectData } from "./getProjectData"

export const getWorkspaceData: api.GetWorkspaceData = (
    $, $i, $r
) => {

    return pa.rewrite(
        $r.readDirectory(
            {
                path: $.rootDir
            },
        ),
        (result) => {
            return pa.rewrite(
                pa.dictionary(
                    result,
                    ($, key) => {
                        return getProjectData(
                            {
                                name: key,
                                projectDir: $.path,
                            },
                            $i,
                            $r
                        )
                    }
                ),
                (projects) => {
                    return pa.value({
                        projects: projects
                    })
                }
            )

        }
    )
}