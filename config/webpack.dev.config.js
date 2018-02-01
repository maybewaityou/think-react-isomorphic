/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    port: 9000,
    open: true
  }
});
