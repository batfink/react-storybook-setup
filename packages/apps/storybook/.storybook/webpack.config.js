// const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loaders: [
                    'babel-loader',
                    'stylelint-custom-processor-loader',                    
                ],
                exclude: [
                    /node_modules/,
                ],
            },
        ],
    },
    // resolve: {
    //     alias: {
    //         'components': path.resolve(__dirname, '../../../components')
    //     }
    // },
    devServer: {
        inline: true,
        hot: true
    }
}