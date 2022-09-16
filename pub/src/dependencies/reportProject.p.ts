
import * as collation from "res-pareto-collation"
import * as uglyStuff from "res-pareto-ugly-stuff"

import { DReportProjectDependencies } from "../interface"

export const reportProjectsDependencies: DReportProjectDependencies = {
    arrayIncludes: uglyStuff.includes,
    sortedForEach: collation. createSortedForEach({
        isYinBeforeYang: collation.localeIsYinBeforeYang
    })
}