import { API } from "./api.generated"
import { $$ as igetProjectData } from "./implementations/getProjectData.a.f"
import { $$ as igetWorkspaceData } from "./implementations/getWorkspaceData.a.f"

export const $api: API = {
    'getProjectData': igetProjectData,
    'getWorkspaceData': igetWorkspaceData,
}