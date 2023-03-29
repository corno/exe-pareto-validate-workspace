import { API } from "./api.generated"
import { $$ as icreateGraphvizGenerator } from "./implementations/createGraphvizGenerator.a.c"
import { $$ as icreateWorkspaceValidator } from "./implementations/createWorkspaceValidator.a.c"

export const $api: API = {
    'createGraphvizGenerator': icreateGraphvizGenerator,
    'createWorkspaceValidator': icreateWorkspaceValidator,
}