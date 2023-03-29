import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import {
    typeReference,
    type,
    group,
    member,
    array,
    data,
    dictionary,
    taggedUnion,
    null_,
    optional,
    glossaryParameter,
    boolean,
    string,
    imp,
    ref,
    externalTypeReference,
    sInterfaceMethod,
    sInterfaceReference,
    procedure,
    sInterface,
    constructor,
    aExternalInterfaceReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
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
            "CreateGraphvizGenerator": constructor(aExternalInterfaceReference("main", "Main"), {}),
            "CreateWorkspaceValidator": constructor(aExternalInterfaceReference("main", "Main"), {}),
        }),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },

}