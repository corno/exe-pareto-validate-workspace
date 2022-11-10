import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pw from "pareto-core-raw"
import * as uglyStuff from "res-pareto-ugly-stuff"


import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($, $d) => {
    return ($, $a) => {

        const rootDir = "../../../pareto"

        pub.l_generateGraphviz

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



        pub.f_transform()({
            projects: pl.createEmptyDictionary()
        })

        // const proj: pub.TProject = {
        //     gitDirty: false,
        //     parts: 
        // }

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
                    pl.logDebugMessage(`PACKAGE: ${$}`)

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
            {
                error: () => {

                }
            }
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
                                x.push(toPOD($))
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
                return uglyStuff.f_JSONStringify(toPOD(left))
            }
            pl.logDebugMessage(serialize<pub.TProject>($))
            $.gitDirty
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
        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
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
}