/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
const parallelUglifyPluginGenerator = require('./plugin/ParallelUglifyPluginGenerator');

const distPath = 'dist:dll';

module.exports = {
  entry: {
    react: [ 'react', 'react-dom' ],
    reactRouter: [ 'react-router', 'react-router-dom' ],
    polyfill: [ 'core-js/fn/object/assign', 'core-js/fn/promise', 'whatwg-fetch' ],
    mario: [ 'mario-ducks', 'mario-architecture-components', 'mario-pure', 'mario-utilities', 'mario-functional' ],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, `../${distPath}`),
    library: '_dll_[name]'
  },
  plugins: [
    parallelUglifyPluginGenerator('.uglify-dll-cache'),
    new DllPlugin({
      name: '_dll_[name]',
      path: path.resolve(__dirname, `../${distPath}`, '[name].manifest.json')
    })
  ]
};
