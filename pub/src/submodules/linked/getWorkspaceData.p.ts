import * as pl from "pareto-core-lib"
// import { f_reportGraphviz } from "../public/reportGraphviz.p";


// import { f_getWorkspaceData } from "../public/getWorkspaceData.p";
// // import { l_getProjectData } from "./getProjectData.p";

// import * as uglyStuff from "res-pareto-ugly-stuff"
// import * as collation from "res-pareto-collation"
// import * as arithmetic from "res-pareto-arithmetic"
// import * as fsLib from "lib-pareto-filesystem"

// export function l_getWorkspaceData() {
//     return f_getWorkspaceData(
//         {
//             readDirectory: fsLib.l_createReadDirectoryOrAbort(
//                 {
//                     onError: ($) => {
//                         pl.logDebugMessage("IMPLEMENT ME!")
//                     }
//                 }
//             ),
//             getProjectData: l_getProjectData,
//             // dictionaryMaxOrZero: arithmetic.f_directoryMaxOrZero,
//             // first3Characters: ($) => {
//             //     return uglyStuff.f_substr({
//             //         value: $,
//             //         begin: 0,
//             //         length: 3,
//             //     })
//             // },
//             // sortedForEach: collation.fCreateSortedForEach({
//             //     isYinBeforeYang: collation.fLocaleIsYinBeforeYang
//             // })
    
//         }
//     )
// }