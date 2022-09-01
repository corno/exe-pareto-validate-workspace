#!/usr/bin/env node

import * as pl from "pareto-core-lib"
import * as pa from "pareto-core-async"

import * as pub from "../../../pub"
import * as move from "../../../pub/dist/move"


import * as pb from "pareto-core-exe"
import * as fsRes from "res-pareto-filesystem"
import * as fsLib from "lib-pareto-filesystem"
import * as process from "res-pareto-process"
import * as uglyStuff from "res-pareto-ugly-stuff"


pb.runProgram(($, $i, $d) => {

    const rootDir = "../../../pareto"

    $d.startAsync(
        pa.processValue(
            pub.getWorkspaceData(
                {
                    rootDir: rootDir
                },
                {
                    error: (msg) => {
                        $i.stderr.write(msg)
                        $i.stderr.write("\n")
                    }
                },
                {
                    processCall: process.call,
                    readDirectory: move.createReadHandledDirectory(
                        {
                            onError: ($) => {
                                pl.logDebugMessage(`${fsLib.createReadDirErrorMessage($.error)} @ ${$.path}`)
                            }
                        },
                        {
                            readDirectory: fsRes.readDirectory
                        }
                    ),
                    readFile: move.createReadHandledFile(
                        {
                            onError: ($) => {
                                pl.logDebugMessage(`${fsLib.createReadFileErrorMessage($.error)} @ ${$.path}`)
                            }
                        },
                        {
                            readFile: fsRes.readFile
                        }
                    ),
                    registryCache: pub.createRegistryCache(
                        {
                            error: pl.logDebugMessage
                        },
                        {
                            httpsResource: move.createHTTPSResource(
                                pub.registryData,
                                {
                                    onError: () => {
                                        pl.logDebugMessage("IMPLEMENT HTTPS ERROR")
                                    }
                                }
                            ),
                            JSONParse: uglyStuff.JSONParse,

                        }
                    ),
                    jsonparse: uglyStuff.JSONParse,
                    trimEnd: uglyStuff.trimEnd,
                }
            ), (res) => {
                const overview = pub.transform(res)
                pub.reportProjects(
                    overview,
                    {
                        log: (msg) => {
                            $i.stdout.write(msg)
                            $i.stdout.write("\n")
                        }
                    },
                    {
                        arrayIncludes: uglyStuff.includes
                    }
                )

                pub.reportGraphviz(
                    overview,
                    {
                        log: (msg) => {
                            $i.stdout.write(msg)
                            $i.stdout.write("\n")
                        }
                    },
                    {
                        substr: uglyStuff.substr,
                        max: uglyStuff.max,
                    }
                )
            }

        )
    )

})
