import * as pd from 'pareto-core-data'

import { aExternalInterfaceReference, aInterfaceReference, constructor, imp } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "main": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "CreateWorkspaceValidator": constructor(aExternalInterfaceReference("main", "Main"), {}),
            "CreateGraphvizGenerator": constructor(aExternalInterfaceReference("main", "Main"), {})
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}