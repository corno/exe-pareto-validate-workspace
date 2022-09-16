
import * as uglyStuff from "res-pareto-ugly-stuff"
import * as collation from "res-pareto-collation"
import * as arithmetic from "res-pareto-arithmetic"
import { DReportGraphvizDependencies } from "../interface"


export const reportGraphvizDependencies: DReportGraphvizDependencies = {
    dictionaryMaxOrZero: arithmetic.directoryMaxOrZero,
    first3Characters: ($) => {
        return uglyStuff.substr($, 0, 3)
    },
    sortedForEach: collation.createSortedForEach({
        isYinBeforeYang: collation.localeIsYinBeforeYang
    })
}