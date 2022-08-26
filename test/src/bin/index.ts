#!/usr/bin/env node

import * as pl from "pareto-core-lib"

import * as pub from "../../../pub"
import * as move from "../../../pub/dist/move"


import * as pb from "pareto-core-exe"
import * as fsRes from "res-pareto-filesystem"
import * as fsLib from "lib-pareto-filesystem"
import * as process from "res-pareto-process"
import * as uglyStuff from "res-pareto-ugly-stuff"


pb.runProgram(($$) => {

    const rootDir = "../../../pareto"

    if (rootDir === undefined) {
        pl.panic("Missing param")
    }

    pub.getWorkspaceData(
        {
            rootDir: rootDir
        },
        {
            error: (msg) => {
                pb.createStdErr().write(msg)
                pb.createStdErr().write("\n")
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
                    httpsCall: move.httpCall,
                    JSONParse: uglyStuff.JSONParse,

                }
            ),
            jsonparse: uglyStuff.JSONParse,
            trimEnd: uglyStuff.trimEnd,
        }
    ).execute((res) => {
        const overview = pub.transform(res)
        pub.reportProjects(
            overview,
            {
                log: (msg) => {
                    pb.createStdOut().write(msg)
                    pb.createStdOut().write("\n")
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
                    pb.createStdOut().write(msg)
                    pb.createStdOut().write("\n")
                }
            },
            {
                substr: uglyStuff.substr,
                strLen: uglyStuff.stringLength,
            }
        )
    })

})
