
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"

export const f_createGetTestset: api.FCreateGetTestset = ($d) => {
    return ($, $d) => {

        const rootDir = "../../../pareto"

        pl.logDebugMessage("REENABLE TESTS!!!!!!")


        // $d.startAsync(
        //     pa.processValue(
        //         pub.getWorkspaceData(
        //             {
        //                 rootDir: rootDir
        //             },
        //             {
        //                 error: (msg) => {
        //                     $i.stderr.write(msg)
        //                     $i.stderr.write("\n")
        //                 }
        //             },
        //             {
        //                 processCall: process.call,
        //                 readDirectory: move.createReadHandledDirectory(
        //                     {
        //                         onError: ($) => {
        //                             pl.logDebugMessage(`${fsLib.createReadDirErrorMessage($.error)} @ ${$.path}`)
        //                         }
        //                     },
        //                     {
        //                         readDirectory: fsRes.readDirectory
        //                     }
        //                 ),
        //                 readFile: move.createReadHandledFile(
        //                     {
        //                         onError: ($) => {
        //                             pl.logDebugMessage(`${fsLib.createReadFileErrorMessage($.error)} @ ${$.path}`)
        //                         }
        //                     },
        //                     {
        //                         readFile: fsRes.readFile
        //                     }
        //                 ),
        //                 registryCache: pub.createRegistryCache(
        //                     {
        //                         error: pl.logDebugMessage
        //                     },
        //                     {
        //                         httpsResource: move.createHTTPSResource(
        //                             pub.registryData,
        //                             {
        //                                 onError: () => {
        //                                     pl.logDebugMessage("IMPLEMENT HTTPS ERROR")
        //                                 }
        //                             }
        //                         ),
        //                         JSONParse: uglyStuff.JSONParse,
    
        //                     }
        //                 ),
        //                 jsonparse: uglyStuff.JSONParse,
        //                 trimEnd: uglyStuff.trimEnd,
        //             }
        //         ), (res) => {
        //             const overview = pub.transform(res)
        //             pub.reportProjects(
        //                 overview,
        //                 {
        //                     log: (msg) => {
        //                         $i.stdout.write(msg)
        //                         $i.stdout.write("\n")
        //                     }
        //                 },
        //                 {
        //                     arrayIncludes: uglyStuff.includes
        //                 }
        //             )
    
        //             pub.reportGraphviz(
        //                 overview,
        //                 {
        //                     log: (msg) => {
        //                         $i.stdout.write(msg)
        //                         $i.stdout.write("\n")
        //                     }
        //                 },
        //                 {
        //                     substr: uglyStuff.substr,
        //                     max: uglyStuff.max,
        //                 }
        //             )
        //         }
    
        //     )
        // )
        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", null],
            () => {
                pl.panic("duplicate key")
            }
        )
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}