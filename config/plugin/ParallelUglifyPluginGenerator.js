/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = function (cacheDir) {
  return new ParallelUglifyPlugin({
    cacheDir: cacheDir,
    uglifyES: {
      output: {
        beautify: false,
        comments: false
      },
      compress: {
        warnings: false,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true,
      }
    },
  });
}
