// import * as pl from 'pareto-core-lib'

// import * as api from "../../interface"

// import * as fsLib from "lib-pareto-filesystem"


// export function f_getWorkspaceData(
//     $d: {
//         readonly readDirectory: fsLib.FReadDirectoryOrAbort,
//         readonly getProjectData: api.FGetProjectData,
//     },
// ): api.FGetWorkspaceData {
//     return (
//         $
//     ) => {
//         return $d.readDirectory(
//             {
//                 path: $.rootDir
//             },
//         ).map(($) => {
//             return $.asyncMap(($, key) => {
//                 return $d.getProjectData(
//                     {
//                         name: key,
//                         projectDir: $.path,
//                     }
//                 )
//             }).map(($) => {
//                 return pl.asyncValue({
//                     projects: $
//                 })
//             })
//         })
//     }
// }