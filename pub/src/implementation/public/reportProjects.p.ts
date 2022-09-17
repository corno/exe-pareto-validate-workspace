
import * as inf from "../../interface"


export const p_reportProjects: inf.PReportProjects = (
    $,
    $i,
    $d
) => {

    $d.sortedForEach($.projects, (project, key) => {
        $i.log(`${key} ${project.gitDirty ? `${$.red}open gitchanges${$.reset}` : ""}`)
        $d.sortedForEach(project.parts, (part, key) => {
            $i.log(`\t${key} ${part.version === null ? "" : part.version} ${part.contentFingerprint === null ? "" : part.contentFingerprint} ${part.status[0] === "clean" ? "" : `${$.red}${part.status[0]}${$.reset}`}`)
            $d.sortedForEach(part.dependencies, (v, key) => {
                $i.log(`\t\t${key} -> ${v.version} ${v.status[0] === "clean" ? "" : `${$.red}${v.status[0]}${$.reset}`}`)
            })
            $d.sortedForEach(part.devDependencies, (v, key) => {
                $i.log(`\t\t${key}(dev) -> ${v.version} ${v.status[0] === "clean" ? "" : `${$.red}${v.status[0]}${$.reset}`}`)
            })
        })
    })
}
