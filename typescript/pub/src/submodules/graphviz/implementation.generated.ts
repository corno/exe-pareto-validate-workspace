import { API } from "./api.generated"
import { $$ as iserialize } from "./implementations/serialize.s.p"
import { $$ as iunboundSerialize } from "./implementations/unboundSerialize.s.p"

export const $api: API = {
    'serialize': iserialize,
    'unboundSerialize': iunboundSerialize,
}