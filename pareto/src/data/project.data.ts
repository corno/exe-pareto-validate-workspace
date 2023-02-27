import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as git } from "./submodules/git/api.data"
import { $ as graphviz } from "./submodules/graphviz/api.deprecated"
import { $ as overview } from "./submodules/overview/api.data"
import { $ as data } from "./submodules/data/api.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "validate the projects in a workspace; do they conform to the pareto standard and are their dependencies updated",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": {},
        "res-pareto-main": {},
        "res-pareto-process": {},
        "res-pareto-foreach": {},
        "res-pareto-string": {},
        "res-pareto-tostring": {},
        "lib-fountain-pen": {},
        // "lib-pareto-exe": "^0.5.0",
         "lib-pareto-filesystem": {},
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
            'implementation': ['manual', {}],
        },
        'submodules': d({
            "data": {
                'definition': data,
                'implementation': ['manual', {}],
            },
            "git": {
                'definition': git,
                'implementation': ['manual', {}],
            },
            "graphviz": {
                'definition': graphviz,
                'implementation': ['manual', {}],
            },
            "overview": {
                'definition': overview,
                'implementation': ['manual', {}],
            },
        }),
        'executables': d({
            "generateGraphviz": {},
            "validateWorkspace": {},
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}