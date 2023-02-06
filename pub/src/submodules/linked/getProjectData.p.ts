// import * as pl from "pareto-core-lib"
// import { f_reportGraphviz } from "../public/reportGraphviz.p";

// import * as uglyStuff from "res-pareto-ugly-stuff"
// import * as collation from "res-pareto-collation"
// import * as arithmetic from "res-pareto-arithmetic"
// import * as fsRes from "res-pareto-filesystem"
// import { f_getWorkspaceData } from "../public/getWorkspaceData.p";
// import { f_getProjectData } from "../public/getProjectData.p";

// import * as fs from "lib-pareto-filesystem"
// import { l_gitIsClean } from "./gitIsClean.p";

// export const l_getProjectData = f_getProjectData(
//     {
//         readDirectory: fs.l_createReadDirectoryOrAbort({
//             onError: () => {
//                 pl.logDebugMessage("!!!!@")
//             }
//         }),
//         gitIsClean: l_gitIsClean({
//             error: ($) => {
//                 switch ($[0]) {
//                     case "unknown": 
//                         pl.cc($[1], ($) => {
//                             pl.logDebugMessage(`GIC: ${$}`)

//                         })
//                         break
//                     default: pl.au($[0])
//                 }
//             }
//         }),
//         getPackage: ($) => {
//             return uglyStuff.f_JSONParseStream({
//                 connectToStream: ($i) => {
//                     fsRes.f_getFile(
//                         [$, "package.json"],
//                         {
//                             init: ($c) => {
//                                 $c($i)
//                             },
//                             onError: () => {
//                                 pl.logDebugMessage("???")
//                             }
//                         },
//                         ($, $i) => $._execute($i),
//                     )

//                 }
//             })
  
//         },
//         getRemoteData: ($) => {
//             l_creRe
//             https
//             return pl.asyncValue(null)

//         },
//         // dictionaryMaxOrZero: arithmetic.f_directoryMaxOrZero,
//         // first3Characters: ($) => {
//         //     return uglyStuff.f_substr({
//         //         value: $,
//         //         begin: 0,
//         //         length: 3,
//         //     })
//         // },
//         // sortedForEach: collation.fCreateSortedForEach({
//         //     isYinBeforeYang: collation.fLocaleIsYinBeforeYang
//         // })

//     }
// )