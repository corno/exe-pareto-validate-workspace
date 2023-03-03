import { API } from "./definition/api.generated"
import { $$ as igetProjectData } from "./implementations/getProjectData.p"
import { $$ as igetWorkspaceData } from "./implementations/getWorkspaceData.p"

export const $a: API = {
    'getProjectData': igetProjectData,
    'getWorkspaceData': igetWorkspaceData,
}