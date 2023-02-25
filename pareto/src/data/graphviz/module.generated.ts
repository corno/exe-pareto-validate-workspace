import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({}),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "dictionary": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "value": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "value",
                                'arguments': d({}),
                            }],
                        },
                    })]
                },
                "group": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "properties": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "properties",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "list": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "value": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "value",
                                'arguments': d({}),
                            }],
                        },
                    })]
                },
                "multiline string": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({})]
                },
                "options": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "value": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "value",
                                'arguments': d({}),
                            }],
                        },
                    })]
                },
                "properties": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "value": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "value",
                                'arguments': d({}),
                            }],
                        },
                    })]
                },
                "Root": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "types": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "types",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "simple string": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "quoted": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                        },
                    })]
                },
                "simple string type": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "quoted": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                        },
                    })]
                },
                "tagged union": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "options": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "options",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "type": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "dictionary": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "dictionary",
                            'arguments': d({}),
                        }],
                        "group": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "group",
                            'arguments': d({}),
                        }],
                        "list": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "list",
                            'arguments': d({}),
                        }],
                        "multiline string": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "multiline string",
                            'arguments': d({}),
                        }],
                        "simple string": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "simple string type",
                            'arguments': d({}),
                        }],
                        "tagged union": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "tagged union",
                            'arguments': d({}),
                        }],
                        "type reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "type reference",
                            'arguments': d({}),
                        }],
                    })]
                },
                "type reference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({})]
                },
                "types": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "value": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "value",
                                'arguments': d({}),
                            }],
                        },
                    })]
                },
                "value": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "type": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "type",
                                'arguments': d({}),
                            }],
                        },
                    })]
                },
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({}),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}