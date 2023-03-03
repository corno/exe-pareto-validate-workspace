import { API } from "./definition/api.generated"
import { $$ as iserialize } from "./implementations/serialize.p"
import { $$ as iunboundSerialize } from "./implementations/unboundSerialize.p"

export const $a: API = {
    'serialize': iserialize,
    'unboundSerialize': iunboundSerialize,
}