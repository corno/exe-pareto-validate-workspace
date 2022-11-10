import * as pt from "pareto-core-types"

import * as api from "../../interface"

import * as exe from "lib-pareto-exe"

import * as uglyStuff from "api-pareto-ugly-stuff"
import * as process from "api-pareto-process"
import * as fsAPI from "api-pareto-filesystem"

import * as async from "api-pareto-async"

export function f_generateGraphviz (
    $d: {
        readDirectory: fsAPI.FReadDirectory
        processCall: process.FCall
        trimEnd: uglyStuff.FTrimEnd
        JSONParseStream: uglyStuff.FJSONParseStream
        createCache: async.FCreateCache
        createAggregater: async.FCreateAggregater
    },
    $a: pt.ProcessAsyncValue
): api.FGenerateGraphviz {
    return ($, $i) => {
        const config = $
        exe.p_getSingleArgument(
            $.arguments,
            {
                error: () => {
                    $i.logError(`Expected exactly 1 argument`)
                },
                callback: ($) => {

                    const rootDir = $

                    // $a(
                    //     f_getWorkspaceData(

                    //         {
                    //             rootDir: rootDir,
                    //         },
                    //         {
                    //             error: pl.logDebugMessage
                    //         },
                    //         {
                    //             readDirectory: fs.f_createReadDirectoryOrAbort(
                    //                 {
                    //                     onError: ($) => {
                    //                         $i.logError(`${fs.f_createReadDirErrorMessage($.error)} @ ${$.path}`)
                    //                     }
                    //                 },
                    //                 $d.readDirectory
                    //             ),
                    //             project: {
                    //                 processCall: $d.processCall,
                    //                 readDirectory: fs.f_createReadDirectoryOrAbort(
                    //                     {
                    //                         onError: ($) => {
                    //                             $i.logError(`${fs.f_createReadDirErrorMessage($.error)} @ ${$.path}`)
                    //                         }
                    //                     },
                    //                     $d.readDirectory
                    //                 ),
                    //                 // readFile: fs.f_createReadFileOrAbort(
                    //                 //     {
                    //                 //         onError: ($) => {
                    //                 //             pl.logDebugMessage("@@@@@")
                    //                 //         }
                    //                 //     },
                    //                 //     $d.readFile,
                    //                 // ),
                    //                 registryCache: f_createRegistryCache(
                    //                     {
                    //                         error: pl.logDebugMessage
                    //                     },
                    //                     {
                    //                         createCache: $d.createCache,
                    //                         httpsResource: $d.httpsResource(
                    //                             config.registryData,
                    //                             {
                    //                                 onError: () => {
                    //                                     pl.logDebugMessage("##$#$#$$")
                    //                                 }
                    //                             }
                    //                         ),
                    //                         // aggregate: $d.createAggregater,
                    //                         // // httpsResource: $d.createHTTPSResource(
                    //                         // //     registryData,
                    //                         // //     {
                    //                         // //         onError: () => {
                    //                         // //             pl.logDebugMessage("IMPLEMENT HTTPS ERROR")
                    //                         // //         }
                    //                         // //     }
                    //                         // // ),
                    //                         JSONParseStream: $d.JSONParseStream,

                    //                     },
                    //                     $a,
                    //                 ),
                    //                 jsonParseStream: $d.JSONParseStream,
                    //                 trimEnd: $d.trimEnd,
                    //             }
                    //         },
                    //     ),
                    //     (res) => {
                    //         const overview = f_transform(res)

                    //         p_reportGraphviz(
                    //             overview,
                    //             {
                    //                 log: $i.log
                    //             },
                    //             $d.report
                    //         )
                    //     }
                    // )
                }
            }
        )
    }
}