const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'components':  path.resolve(__dirname, 'src/components'),
            'stores':  path.resolve(__dirname, 'stores')
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.ejs'
        })
    ]
}