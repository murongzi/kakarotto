import * as webpack from 'webpack';
import BaseConfig from './base';
import * as path from 'path';
import * as Tapable from 'tapable';

export default class extends BaseConfig implements webpack.Configuration {
    devtool: webpack.Options.Devtool = 'source-map';
    entry = {
        index: './index.ts'
    };

    output = {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js'
    };

    constructor(env: string, argv: any) {
        super(env);

        /**
         * 默认sourceMap为false，不产生source map文件，即是添加了dev tool也不会产生
         * 
         * devtool也得预先存在
         */
        this.plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }));
    }
}