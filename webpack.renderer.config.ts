/* eslint-disable @typescript-eslint/no-var-requires */
import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push(
  { test: /\.(html)$/, use: ["html-loader"] },
  {test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {loader: 'sass-loader'}]},
  {
    test: /\.(jpe?g|png|gif|svg|ico|icns)$/i, 
    loader: 'file-loader',
    options: {
      name: '/public/images/[name].[ext]'
    }
  }
  );
  
export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.jpg', '.png', '.ico'],
      modules: [
        'node_modules'
      ]
  },
};
