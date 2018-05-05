const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    /* devtool:'eval', */
    entry: {
        vendor: [
            'react',
            'react-dom'
        ],
        main: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
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
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    './src/styles/common/_mixs.scss'
                                ]
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'script/[name].js'
        })/* ,
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            sourceMap: false
        }) */
    ]
}
