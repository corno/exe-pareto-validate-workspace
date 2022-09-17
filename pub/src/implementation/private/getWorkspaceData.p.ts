
import * as api from "../interface"

import * as pa from "pareto-core-async"

import { getProjectData } from "./f_getProjectData"

export const f_getWorkspaceData: api.AGetWorkspaceData = (
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