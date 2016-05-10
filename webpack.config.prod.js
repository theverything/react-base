var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader?sourceMap&modules&localIdentName=[name]__[local]',
  'postcss-loader',
  'sass-loader?sourceMap'
];

module.exports = {
  target: 'web',
  devtool: 'source-map',
  cache: false,
  debug: false,
  entry: {
    web:'./web/index'
  },
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'bundle.[name].js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin('bundle.[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'web')
      },
      { test: /\.(jpe?g|png|gif|svg|woff|woff2)$/i, loader: 'file-loader' },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'web/scss')]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 Chrome versions'] })]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};
