import * as webpack from 'webpack';

import DevConfig from './config/dev';

import DistConfig from './config/dist';

export default (env: string, argv: any): webpack.Configuration => env === 'dist' ? new DistConfig(env, argv): new DevConfig(env, argv);
