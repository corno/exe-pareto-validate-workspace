import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CgetWorkspaceData = ($d) => {
    return ($) => {
        return $d.readDirectory(
            {
                path: $
            },
        ).map(($) => {
            return $.asyncMap(($, key) => {
                return $d.getProjectData(
                    {
                        name: key,
                        path: $.path,
                    }
                )
            }).map(($) => {
                return pl.asyncValue({
                    projects: $
                })
            })
        })
    }
}