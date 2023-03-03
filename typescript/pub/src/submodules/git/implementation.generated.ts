import { API } from "./definition/api.generated"
import { $$ as icreateGitIsClean } from "./implementations/createGitIsClean.p"

export const $a: API = {
    'createGitIsClean': icreateGitIsClean,
}