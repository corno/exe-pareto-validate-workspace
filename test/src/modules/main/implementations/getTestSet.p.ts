import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pw from "pareto-core-raw"

import * as api from "../api"
import * as pub from "../../../../../pub"


import * as muglyStuff from "res-pareto-ugly-stuff"
import * as mtest from "lib-pareto-test"

export const $$: api.CgetTestSet = ($) => {

    const rootDir = "../../../pareto"

    // $a(
    //     pub.l_getWorkspaceData()({
    //         rootDir: [$.testDirectory, "../../.."]
    //     }),
    //     ($) => {
    //         pub.l_reportProjects(
    //             {
    //                 workspace: pub.f_transform()($)
    //             },
    //             {
    //                 log: ($) => {
    //                     pl.logDebugMessage($)
    //                 }
    //             }
    //         )
    //     }
    // )


    $a(
        pub.l_gitIsClean(
            {
                error: ($) => {
                    switch ($[0]) {
                        case "unknown":
                            pl.cc($[1], ($) => {
                                pl.logDebugMessage($)
                            })
                            break
                        default: pl.au($[0])
                    }
                }
            }
        )(
            {
                directory: $.testDirectory
            }
        ),
        ($) => {
            pl.logDebugMessage(`GIT IS CLEAN: ${$}`)
        }
    )



    const proj: pub.TProject = {
        "gitIsClean": false,
        "parts": pw.wrapRawDictionary({
            "pub": {
                "packageData": {
                    "name": null,
                    "version": "XXX",
                    "contentFingerprint": "XXX",
                    "dependencies": pw.wrapRawDictionary({
                        "BLA": {
                            "remote": null,
                            "version": "BAR"
                        }
                    }),
                    "devDependencies": pw.wrapRawDictionary({}),
                    "remote": null
                }
            },
            "test": {
                "packageData": {
                    "name": null,
                    "version": null,
                    "contentFingerprint": null,
                    "dependencies": pw.wrapRawDictionary({}),
                    "devDependencies": pw.wrapRawDictionary({}),
                    "remote": null
                }
            }
        })
    }

    const x = pub.f_transform()({
        projects: pw.wrapRawDictionary({
            "Y": proj,
            "lib_Y": proj,
        })
    })

    pub.l_reportGraphviz(
        x,
        {
            // error: ($) => {
            //     pl.logDebugMessage(`GV ERROR: ${$}`)
            // },
            log: ($) => {
                pl.logDebugMessage(`GV: ${$}`)
            }
        }
    )

    pub.f_getProjectData(
        {
            readDirectory: ($) => {
                $.path
                return pl.asyncValue(pw.wrapRawDictionary({
                    "pub": {
                        path: "PUB",
                        type: ["directory", null]
                    },
                    "test": {
                        path: "TEST",
                        type: ["file", null]
                    },
                    "bla": {
                        path: "BLA",
                        type: ["file", null]
                    }
                }))
            },
            gitIsClean: ($) => {
                $.directory
                pl.logDebugMessage(`GIT >>${$.directory}`)
                return pl.asyncValue(false)

            },
            getRemoteData: ($) => {
                pl.logDebugMessage(`REMOTE: ${$}`)
                return pl.asyncValue(null)
            },
            getPackage: ($) => {
                pl.logDebugMessage(`PACKAGE: ${$}`)

                if ($ === "PUB") {
                    return pl.asyncValue({
                        //name: "XXX",
                        version: "XXX",
                        'content-fingerprint': "XXX",
                        'dependencies': {
                            "BLA": "BAR"
                        },
                        'devDependencies': {},
                    })

                } else {
                    return pl.asyncValue({

                    })
                }

                // $d.jsonParseStream<PKG>(
                //     {
                //         connectToStream: ($i) => {
                //             // $d.getFile(
                //             //     [$.path, `package.json`],
                //             //     {
                //             //         init: () => {

                //             //         },
                //             //         onError: () => {

                //             //         },
                //             //     },
                //             //     //$a,
                //             // )
                //             // $d.readFile({

                //             // })

                //             $i.onData("FOOOSSS")
                //             $i.onEnd()
                //             // $d.
                //             //pl.implementMe("@@@@@@")
                //             // $d.readFile(
                //             //     {
                //             //         path: [$.path, `package.json`],
                //             //     }
                //             // )
                //         }
                //     },
                // )
            }
        },

    )(
        {
            name: "FOO_NAME",
            projectDir: "FOO_DIR",
        },
        // {
        //     // error: () => {

        //     // }
        // }
    )._execute(($) => {

        function serialize<T>(left: T) {
            function toPOD(left: any): any {
                if (
                    typeof left === "number" ||
                    typeof left === "string" ||
                    typeof left === "boolean"
                ) {
                    return left
                } else if (typeof left === "object") {
                    function isDictionary(v: any): v is pt.Dictionary<any> {
                        return (v.map !== undefined && v.forEach === undefined)
                    }
                    function isArray(v: any): v is pt.Array<any> {
                        return v.forEach !== undefined
                    }
                    if (left === null) {
                        return left
                    } else if (isDictionary(left)) {
                        const x: { [key: string]: any } = {}
                        left.map(($, key) => {
                            //pl.logDebugMessage(`ENTRY: ${key}`)

                            x[key] = toPOD($)
                        })
                        return x
                    } else if (isArray(left)) {
                        const x: any[] = []
                        left.forEach(($) => {
                            // x.push(toPOD($))
                        })
                        return x
                    } else {
                        const x: { [key: string]: any } = {}


                        for (const $ in left) {
                            //pl.logDebugMessage(`PROP: ${$}`)
                            x[$] = toPOD(left[$])
                        }
                        return x
                    }
                } else {
                    // pl.logDebugMessage()
                    pl.panic(`unexpected: ${left}`)
                }
            }
            return muglyStuff.f_JSONStringify(toPOD(left))
        }
        pl.logDebugMessage(serialize<pub.TProject>($))
        $.gitIsClean
        // $.parts.
    })


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

    // pub.generateGraphviz(
    //     {
    //         arguments: pw.wrapRawArray(["../.."]),
    //         registryData: pub.registryData,
    //     },
    //     {
    //         log: ($) => {
    //             pl.logDebugMessage($)
    //         },
    //         logError: ($) => {
    //             pl.logDebugMessage($)
    //         },
    //     },
    // )
    const builder = pm.createUnsafeDictionaryBuilder<mtest.TTestElement>()
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

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}