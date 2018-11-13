const config = {
    extends: [
        '@commitlint/config-conventional',
    ],
    rules: {
        'type-empty': [
            2,
            'never',
        ],
        'scope-enum': [
            2,
            'always',
            [
                'foobar',
            ],
        ],
    },
}

module.exports = config
