const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool:'eval',
    entry: {
        vendor: [
            'react',
            'react-dom'
        ],
        main: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                include: path.join(__dirname, './src'),
                loader: 'eslint-loader'
            },
            {
              test: /\.js$/,
              enforce: 'pre',
              include: path.join(__dirname, './src'),
              loader: 'source-map-loader'
            },
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ],
                include: path.join(__dirname, './src'),
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js'
        })/* ,
        new webpack.optimize.UglifyJsPlugin() */
    ]
}
