import * as webpack from 'webpack';
import BaseConfig from './base';
import * as path from 'path';

export default class extends BaseConfig implements webpack.Configuration {
    devtool: webpack.Options.Devtool = 'eval';
    entry = {
        index: './index.ts'
    };

    output = {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    }

    constructor(env: string, argv: any) {
        super(env)
    }
}