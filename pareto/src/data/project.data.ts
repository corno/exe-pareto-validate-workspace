import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as bindings } from "./bindings/moduledefinition.data"
import { $ as main } from "./main/module.data"
import { $ as git } from "./submodules/git/module.data"
import { $ as graphviz } from "./submodules/graphviz/module.data"
import { $ as overview } from "./submodules/overview/module.data"
import { $ as data } from "./submodules/data/module.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "validate the projects in a workspace; do they conform to the pareto standard and are their dependencies updated",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "res-pareto-main": null,
        "res-pareto-process": null,
        "res-pareto-foreach": null,
        "res-pareto-string": null,
        "res-pareto-tostring": null,
        "lib-fountain-pen": null,
        // "lib-pareto-exe": "^0.5.0",
        "lib-pareto-filesystem": null,
        // "res-pareto-arithmetic": "^0.4.0",
        // "res-pareto-async": "^0.2.0",
        // "res-pareto-collation": "^0.8.0",
        // "res-pareto-filesystem": "^0.26.0",
        // "res-pareto-https": "^0.23.0",
        // "res-pareto-process": "^0.8.0",
        // "res-pareto-ugly-stuff": "^0.9.0"

    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "data": data,
            "git": git,
            "graphviz": graphviz,
            "overview": overview,
        }),
        'bindings': [true, {
            'definition': bindings,
            'implementation': ['typescript', null],

        }],
        'executables': d({
            "generateGraphviz": {
                'constructor': "CreateWorkspaceValidator"
            },
            "validateWorkspace": {
                'constructor': "CreateWorspaceValidator"
            },
        }),
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        }
    }],
}