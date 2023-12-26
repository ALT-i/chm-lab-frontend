import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-require
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new ReactRefreshWebpackPlugin(),
  new CopyPlugin({
    patterns: [ { from: path.resolve(__dirname, 'src', "assets"), to: path.resolve(__dirname, '.webpack/renderer', "assets") },]
  }),
];
