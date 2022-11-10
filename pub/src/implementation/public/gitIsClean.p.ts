

import * as pl from "pareto-core-lib"

import * as api from "../../interface"
import * as uglyStuff from "api-pareto-ugly-stuff"
import * as process from "api-pareto-process"

export function f_gitIsClean(
    $d: {
        readonly processCall: process.FCall,
        readonly trimEnd: uglyStuff.FTrimEnd
    }
): api.FCreateErrorHandledGitIsClean {
    return ($i) => {

        return ($) => {
            return $d.processCall(
                `git -C ${$.directory} diff --exit-code && git -C ${$.directory} log origin/master..master --exit-code`,
            ).map<boolean>(($) => {
                switch ($[0]) {
                    case "error":
                        return pl.cc($[1], ($) => {
                            $i.error(["unknown", $.stderr])
                            return pl.asyncValue(false)
                        })
                    case "success":
                        return pl.cc($[1], ($) => {
                            return pl.asyncValue($d.trimEnd($) === "")
                        })
                    default: return pl.au($[0])
                }
            })
        }
    }
}