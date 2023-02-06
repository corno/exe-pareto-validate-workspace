import { API } from "./api"
import { $$ as icreateGitIsClean } from "./implementations/createGitIsClean.p"

export const $a: API = {
    'createGitIsClean': icreateGitIsClean,
}