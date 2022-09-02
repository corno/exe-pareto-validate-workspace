#!/usr/bin/env node

import * as pl from "pareto-core-lib"
import * as pb from "pareto-core-exe"
import * as pa from "pareto-core-async"

import * as fs from "res-pareto-filesystem"
import * as fsLib from "lib-pareto-filesystem"
import * as process from "res-pareto-process"
import * as uglyStuff from "res-pareto-ugly-stuff"

import * as imp from "../imp"
import { registryData } from "../data/registryData"
import * as exeLib from "lib-pareto-exe"
import { createHTTPSResource } from "../imp/move/httpsCall"

pb.runProgram(($, $i, $d) => {

    exeLib.getSingleArgument(
        $.arguments,
        {
            error: () => {
                pl.panic("args")
            },
            callback: ($) => {

                const rootDir = $

                $d.startAsync(
                    pa.processValue(
                        imp.getWorkspaceData(

                            {
                                rootDir: rootDir,
                            },
                            {
                                error: pl.logDebugMessage
                            },
                            {
                                processCall: process.call,
                                readDirectory: fsLib.createReadDirectoryOrAbort(
                                    {
                                        onError: ($) => {
                                            pl.logDebugMessage("READDIR ERROR")
                                        }
                                    },
                                    {
                                        readDirectory: fs.readDirectory
                                    }
                                ),
                                readFile: fsLib.createReadFileOrAbort(
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
                                        httpsResource: createHTTPSResource(
                                            registryData,
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
                        ),
                        (res) => {
                            const overview = imp.transform(res)
    
                            imp.reportGraphviz(
                                overview,
                                {
                                    log: (msg) => {
                                        const out = $i.stdout
                                        out.write(msg)
                                        out.write("\n")
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
            }
        }
    )

})
