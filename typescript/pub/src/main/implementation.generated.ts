import { API } from "./definition/api.generated"
import { $$ as igenerateGraphviz } from "./implementations/generateGraphviz.p"
import { $$ as ivalidateWorkspace } from "./implementations/validateWorkspace.p"

export const $a: API = {
    'generateGraphviz': igenerateGraphviz,
    'validateWorkspace': ivalidateWorkspace,
}