#!/usr/bin/env node

import * as pl from "pareto-core-lib"
import * as pb from "pareto-core-exe"

import * as fs from "res-pareto-filesystem"
import * as process from "res-pareto-process"
import * as uglyStuff from "res-pareto-ugly-stuff"

import * as imp from "../imp"
import * as move from "../move"

pb.runProgram(($$) => {

    const rootDir = $$.argument

    if (rootDir === undefined) {
        pl.panic("Missing param")
    }

    imp.getWorkspaceData(

        {
            rootDir: rootDir,
        },
        {
            error: pl.logDebugMessage
        },
        {
            processCall: process.call,
            readDirectory: move.createReadHandledDirectory(
                {
                    onError: ($) => {
                        pl.logDebugMessage("@@@@@")
                    }
                },
                {
                    readDirectory: fs.readDirectory
                }
            ),
            readFile: move.createReadHandledFile(
                {
                    onError: ($) => {
                        pl.logDebugMessage("@@@@@")
                    }
                },
                {
                    readFile: fs.readFile
                }
            ),
            registryCache: imp.createRegistryCache(
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
        const overview = imp.transform(res)

        imp.reportGraphviz(
            overview,
            {
                log: (msg) => {
                    const out = pb.createStdOut()
                    out.write(msg)
                    out.write("\n")
                }
            },
            {
                substr: uglyStuff.substr,
                strLen: uglyStuff.stringLength,
            }
        )
    })

})
