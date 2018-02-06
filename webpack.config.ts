import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'cheap-source-map',
    entry: {
        index: './index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}

export default config;