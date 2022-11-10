import { f_reportGraphviz } from "../public/reportGraphviz.p";

import * as uglyStuff from "res-pareto-ugly-stuff"
import * as collation from "res-pareto-collation"
import * as arithmetic from "res-pareto-arithmetic"

export const l_reportGraphviz = f_reportGraphviz(
    {
        dictionaryMaxOrZero: arithmetic.f_directoryMaxOrZero,
        first3Characters: ($) => {
            return uglyStuff.f_substr({
                value: $,
                begin: 0,
                length: 3,
            })
        },
        sortedForEach: collation.fCreateSortedForEach({
            isYinBeforeYang: collation.fLocaleIsYinBeforeYang
        })

    }
)