const config = {
    extends: [
        '@commitlint/config-conventional',
    ],
    rules: {
        'type-empty': [
            2,
            'never',
        ],
        'scope-empty': [
            2,
            'never',
        ],
        'scope-enum': [
            2,
            'always',
            [
                'release',
                'foobar',
            ],
        ],
    },
}

module.exports = config
