import { p_reportProjects } from "../../submodules/public/reportProjects.p";

import * as uglyStuff from "res-pareto-ugly-stuff"
import * as collation from "res-pareto-collation"


export const l_reportProjects = p_reportProjects(
    {
        red: "\x1b[31m",
        reset: "\x1b[0m",
    },
    {
        arrayIncludes: uglyStuff.f_includes,
        sortedForEach: collation.fCreateSortedForEach({
            isYinBeforeYang: collation.fLocaleIsYinBeforeYang
        })
    }
)