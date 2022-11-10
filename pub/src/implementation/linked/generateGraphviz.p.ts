

import * as fs from "res-pareto-filesystem"
import * as async from "res-pareto-async"
import * as process from "res-pareto-process"
import * as uglyStuff from "res-pareto-ugly-stuff"
// import { reportGraphvizDependencies } from "./reportGraphviz.p"

import { f_generateGraphviz } from "../public/generateGraphviz.p";

// export const dgenerateGraphviz = {
// }

export const l_generateGraphviz = f_generateGraphviz(
    {
        //httpsResource: https.f_createHTTPSResource,
        readDirectory: fs.f_readDirectory,
        processCall: process.f_call,
        trimEnd: uglyStuff.f_trimEnd,
        JSONParseStream: uglyStuff.f_JSONParseStream,
        createAggregater: async.aggregate,
        createCache: async.createCache,
        //report: reportGraphvizDependencies,

    },
    ($, $i) => {
        $._execute($i)
    }
)