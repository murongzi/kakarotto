import * as webpack from 'webpack';

import DevConfig from './config/dev';

import DistConfig from './config/dist';

/* class WebPackConfig extends Config implements webpack.Configuration {
    context = path.resolve(__dirname, 'src');

    constructor(env: string, argv: any) {
        super(env, argv);
    }

    entry = {
        index: './index.ts'
    };

    output = {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
} */

console.log(new DistConfig('dist', {}));
console.log(new DevConfig('', {}));

export default (env: string, argv: any): webpack.Configuration => env === 'dist' ? new DistConfig(env, argv): new DevConfig(env, argv);
