import * as path from 'path';
import * as webpack from 'webpack';
import * as Tapable from 'tapable';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default class BaseConfig {
    context = path.resolve(__dirname, '../src');
    devtool: webpack.Options.Devtool;
    module: webpack.NewModule = {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.ts$/, 
                use: 'awesome-typescript-loader',
                exclude: path.resolve(__dirname, '../node_modules'),
            }
        ]
    };
    plugins: Tapable.Plugin[] = [
        new HtmlWebpackPlugin({ template: './index.ejs' })
    ];

    resolve = {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".ts", ".tsx"]
    }

    constructor(env: string) {
    }
}