import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "dictionary": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "value": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "value",
                            'arguments': d({}),
                        }],
                    },
                })]
            },
            "group": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "properties": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "properties",
                            'arguments': d({}),
                        }]],
                    },
                })]
            },
            "list": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "value": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "value",
                            'arguments': d({}),
                        }],
                    },
                })]
            },
            "multiline string": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]
            },
            "options": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "value": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "value",
                            'arguments': d({}),
                        }],
                    },
                })]
            },
            "properties": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "value": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "value",
                            'arguments': d({}),
                        }],
                    },
                })]
            },
            "Root": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "types": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "types",
                            'arguments': d({}),
                        }]],
                    },
                })]
            },
            "simple string": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "quoted": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['boolean', null],
                    },
                })]
            },
            "simple string type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "quoted": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['boolean', null],
                    },
                })]
            },
            "tagged union": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "options": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "options",
                            'arguments': d({}),
                        }]],
                    },
                })]
            },
            "type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "dictionary": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "dictionary",
                        'arguments': d({}),
                    }],
                    "group": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "group",
                        'arguments': d({}),
                    }],
                    "list": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "list",
                        'arguments': d({}),
                    }],
                    "multiline string": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "multiline string",
                        'arguments': d({}),
                    }],
                    "simple string": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "simple string type",
                        'arguments': d({}),
                    }],
                    "tagged union": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "tagged union",
                        'arguments': d({}),
                    }],
                    "type reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "type reference",
                        'arguments': d({}),
                    }],
                })]
            },
            "type reference": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]
            },
            "types": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "value": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "value",
                            'arguments': d({}),
                        }],
                    },
                })]
            },
            "value": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "type",
                            'arguments': d({}),
                        }],
                    },
                })]
            },
        }),
    },
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({}),
}