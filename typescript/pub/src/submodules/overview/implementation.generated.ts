import { API } from "./definition/api.generated"
import { $$ as icreateGraphviz } from "./implementations/createGraphviz.p"
import { $$ as itransform } from "./implementations/transform.p"

export const $a: API = {
    'createGraphviz': icreateGraphviz,
    'transform': itransform,
}