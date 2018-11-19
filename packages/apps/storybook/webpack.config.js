module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'stylelint-custom-processor-loader',
                exclude: [
                    /node_modules/,
                ],
            },
        ],
    },
    devServer: {
        inline: true,
        hot: true
    }
}