// stylelint-loader enables stylelinting during webpack builds

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'stylelint-custom-processor-loader',
                exclude: [
                    /node_modules/,
                    /jest-test-results.json/,
                ],
            },
        ],
    },
}
