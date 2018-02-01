/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const parallelUglifyPluginGenerator = require('./plugin/ParallelUglifyPluginGenerator');

module.exports = merge(baseConfig, {
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    parallelUglifyPluginGenerator('.uglify-cache'),
  ]
});
