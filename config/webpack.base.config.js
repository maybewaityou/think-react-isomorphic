/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const path = require('path');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');

const srcPath = 'src';
const assetsPath = 'assets';
const modulesPath = 'node_modules';
const distPath = 'dist';
const publicPath = 'public';
const manifestRootPath = `../${distPath}:dll`;

function fullPath(subPath) {
  return path.resolve(__dirname, `../${subPath}`);
}

const dll = [ 'reactRouter', 'react', 'polyfill', 'mario' ];

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: '[name].chunk.[chunkhash:8].js',
    path: fullPath(distPath),
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@components': fullPath(`${srcPath}/main/components/index.ts`),
      '@configs': fullPath(`${srcPath}/main/configs/index.ts`),
      '@constant': fullPath(`${srcPath}/main/constant/index.ts`),
      '@context': fullPath(`${srcPath}/main/context/index.ts`),
      '@extensions': fullPath(`${srcPath}/main/extensions/index.ts`),
      '@manager': fullPath(`${srcPath}/main/manager/index.ts`),
      '@utilities': fullPath(`${srcPath}/main/utilities/index.ts`),
      '@vendor': fullPath(`${srcPath}/main/vendor/index.ts`),
      '@actions': fullPath(`${srcPath}/dataflow/actions/index.ts`),
    },
    modules: [ fullPath(modulesPath) ],
    mainFields: [ 'jsnext:main', 'module', 'main' ],
    extensions: [ '.ts', '.tsx', '.js', '.jsx', '.json' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ 'happypack/loader?id=ts' ],
        include: fullPath(srcPath)
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader?minimize', 'postcss-loader', 'sass-loader' ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            }
          }
        ]
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('common'),
    new CleanWebpackPlugin([ distPath ]),
    new HappyPack({
      id: 'ts',
      threads: 3,
      loaders: [{
        path: 'ts-loader',
        query: { happyPackMode: true },
      }],
      threadPool: HappyPack.ThreadPool({ size: 5 }),
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      title: 'think react',
      template: `${assetsPath}/template/index.ejs`,
      favicon: `${assetsPath}/image/favicon.ico`
    }),
    new ForkTsCheckerWebpackPlugin(),
    new NamedModulesPlugin(),
    new ModuleConcatenationPlugin(),
    ...dll.map(item => new DllReferencePlugin({
      manifest: require(`${manifestRootPath}/${item}.manifest.json`)
    }))
  ]
};
