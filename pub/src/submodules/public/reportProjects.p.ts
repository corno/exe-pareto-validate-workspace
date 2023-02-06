
import * as inf from "../../interface"

import * as uglyStuff from "api-pareto-ugly-stuff"
import * as collation from "api-pareto-collation"



export function p_reportProjects(
    $c: {
        readonly "red": string
        readonly "reset": string
    },
    $d: {
        readonly arrayIncludes: uglyStuff.FIncludes
        readonly sortedForEach: collation.FSortedForEach
    }
): inf.PReportProjects {
    return ($, $i) => {

        const config = $c
        $d.sortedForEach($.workspace.projects, ($) => {
            const projectKey = $.key
            $i.log(`${$.key} ${$.value.gitIsClean ? "" : `${config.red}open gitchanges${config.reset}`}`)
            $d.sortedForEach($.value.parts, ($) => {
                $i.log(`\t${$.key} ${$.value.version === null ? "" : $.value.version} ${$.value.contentFingerprint === null ? "" : $.value.contentFingerprint} ${$.value.status[0] === "clean" ? "" : `${config.red}${$.value.status[0]}${config.reset}`}`)
                $d.sortedForEach($.value.dependencies, ($) => {
                    $i.log(`\t\t${$.key} -> ${$.value.version} ${$.value.status[0] === "clean" ? "" : `${config.red}${$.value.status[0]}${config.reset}`}`)
                })
                $d.sortedForEach($.value.devDependencies, ($) => {
                    $i.log(`\t\t${$.key}(dev) -> ${$.value.version} ${$.value.status[0] === "clean" ? "" : `${config.red}${$.value.status[0]}${config.reset}`}`)
                })
            })
        })
    }

}
