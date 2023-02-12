import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"
import { $ as git } from "./submodules/git/api.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "validate the projects in a workspace; do they conform to the pareto standard and are their dependencies updated",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
        "res-pareto-main": {},
        "res-pareto-process": {},
        "res-pareto-string": {},
        // "lib-pareto-exe": "^0.5.0",
        // "lib-pareto-filesystem": "^0.6.0",
        // "res-pareto-arithmetic": "^0.4.0",
        // "res-pareto-async": "^0.2.0",
        // "res-pareto-collation": "^0.8.0",
        // "res-pareto-filesystem": "^0.26.0",
        // "res-pareto-https": "^0.23.0",
        // "res-pareto-process": "^0.8.0",
        // "res-pareto-ugly-stuff": "^0.9.0"

    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
            "git": {
                'definition': git,
            }
        }),
        'executables': d({
            "generateGraphviz": {},
            "validateWorkspace": {},
        }),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}