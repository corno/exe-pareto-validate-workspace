import { API } from "./api.generated"
import { $$ as icreateGraphviz } from "./implementations/createGraphviz.s.p"
import { $$ as itransform } from "./implementations/transform.s.f"

export const $api: API = {
    'createGraphviz': icreateGraphviz,
    'transform': itransform,
}