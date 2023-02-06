import { API } from "./api"
import { $$ as igenerateGraphviz } from "./implementations/generateGraphviz.p"
import { $$ as ivalidateWorkspace } from "./implementations/validateWorkspace.p"

export const $a: API = {
    'generateGraphviz': igenerateGraphviz,
    'validateWorkspace': ivalidateWorkspace,
}