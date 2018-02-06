import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}