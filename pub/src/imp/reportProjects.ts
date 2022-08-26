
import * as pt from "pareto-core-types"

import * as inf from "../interface"

const red = "\x1b[31m"
const reset = "\x1b[0m"


export const reportProjects: inf.ReportProjects = (
    $,
    $i,
) =>{

    $.projects.forEach((a, b) => false, (project, key) => {
        $i.log(`${key} ${project.gitClean ? "" : `${red}open gitchanges${reset}`}`)
        project.parts.forEach((a, b) => false, (part, key) => {
            $i.log(`\t${key} ${part.version === null ? "" : part.version} ${part.contentFingerprint === null ? "" : part.contentFingerprint} ${part.status[0] === "clean" ? "" : `${red}${part.status[0]}${reset}`}`)
            part.dependencies.forEach((a, b) => false, (v, key) => {
                $i.log(`\t\t${key} -> ${v.version} ${v.status[0] === "clean" ? "" : `${red}${v.status[0]}${reset}`}`)
            })
            part.devDependencies.forEach((a, b) => false, (v, key) => {
                $i.log(`\t\t${key}(dev) -> ${v.version} ${v.status[0] === "clean" ? "" : `${red}${v.status[0]}${reset}`}`)
            })
        })
    })
}
