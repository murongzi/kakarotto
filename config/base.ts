import * as path from 'path';
import * as webpack from 'webpack';
import * as Tapable from 'tapable';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { AngularCompilerPlugin } from '@ngtools/webpack';
const ProgressPlugin = require('progress-bar-webpack-plugin');

export default class BaseConfig {
    context = path.resolve(__dirname, '../src');
    devtool: webpack.Options.Devtool;
    module: webpack.NewModule = {
        rules: [
            /* {
                test: /\.css$/,
                use: 'css-loader'
            }, */
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: /\.async\.html$/
            },
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: ['@angular-devkit/build-optimizer/webpack-loader', '@ngtools/webpack']
            }
        ]
    };
    plugins: Tapable.Plugin[] = [
        new ProgressPlugin(),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(@angular|esm5)/, './'),
        new HtmlWebpackPlugin({ template: './index.ejs' }),
        new AngularCompilerPlugin({
            tsConfigPath: path.join('./', './tsconfig.json'),
            mainPath: path.join('./', './index.ts'),
            sourceMap: true,
            skipCodeGeneration: false
        })
    ];

    resolve = {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".ts", ".tsx"]
    }

    constructor(env: string) {
    }
}