import * as pd from 'pareto-core-data'

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "dictionary": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "value": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', null],
                },
            })]
        },
        "simple string type": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "quoted": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', null],
                },
            })]
        },
        "tagged union": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "options": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "dictionary",
                    'arguments': d({}),
                }],
                "group": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "group",
                    'arguments': d({}),
                }],
                "list": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "list",
                    'arguments': d({}),
                }],
                "multiline string": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "multiline string",
                    'arguments': d({}),
                }],
                "simple string": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "simple string type",
                    'arguments': d({}),
                }],
                "tagged union": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "tagged union",
                    'arguments': d({}),
                }],
                "type reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "type",
                        'arguments': d({}),
                    }],
                },
            })]
        },
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({}),
}