// #!/usr/bin/env node

// import * as pl from "pareto-core-lib"
// import * as pb from "pareto-core-exe"

// import * as fs from "res-pareto-filesystem"
// import * as fsLib from "lib-pareto-filesystem"
// import * as process from "res-pareto-process"
// import * as uglyStuff from "res-pareto-ugly-stuff"
// import * as exeLib from "lib-pareto-exe"


// import * as imp from "../implementation"
// import { registryData } from "../data/registryData.p"
// import { reportProjectsDependencies } from "../dependencies/reportProject.p"

// pb.runProgram(($, $i, $a) => {

//     exeLib.p_getSingleArgument(
//         $.arguments,
//         {
//             error: () => {
//                 pl.panic("args")
//             },
//             callback: ($) => {
//                 const rootDir = $
//                 $a(
//                     imp.getWorkspaceData(

//                         {
//                             rootDir: rootDir,
//                         },
//                         {
//                             error: pl.logDebugMessage
//                         },
//                         {
//                             processCall: process.call,
//                             readDirectory: fsLib.createReadDirectoryOrAbort(
//                                 {
//                                     onError: ($) => {
//                                         pl.logDebugMessage("@@@@@")
//                                     }
//                                 },
//                                 {
//                                     readDirectory: fs.readDirectory
//                                 }
//                             ),
//                             readFile: fsLib.createReadFileOrAbort(
//                                 {
//                                     onError: ($) => {
//                                         pl.logDebugMessage("@@@@@")
//                                     }
//                                 },
//                                 {
//                                     readFile: fs.readFile
//                                 }
//                             ),
//                             registryCache: imp.createRegistryCache(
//                                 {
//                                     error: pl.logDebugMessage
//                                 },
//                                 {
//                                     httpsResource: createHTTPSResource(
//                                         registryData,
//                                         {
//                                             onError: () => {
//                                                 pl.logDebugMessage("IMPLEMENT HTTPS ERROR")
//                                             }
//                                         }
//                                     ),
//                                     JSONParse: uglyStuff.JSONParse,

//                                 }
//                             ),
//                             jsonparse: uglyStuff.JSONParse,
//                             trimEnd: uglyStuff.trimEnd,
//                         }
//                     ), (res) => {
//                         const overview = imp.transform(res)
//                         imp.p_reportProjects(
//                             overview,
//                             {
//                                 log: (msg) => {
//                                     $i.stdout.write(msg)
//                                     $i.stdout.write("\n")
//                                 }
//                             },
//                             reportProjectsDependencies,
//                         )


//                     }

//                 )
//             },
//         }
//     )


// })
