var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var sassLoaders = [
  'style-loader',
  'css-loader?modules&localIdentName=[name]__[local]',
  'postcss-loader',
  'sass-loader',
];

module.exports = {
  target: 'web',
  devtool: 'eval',
  cache: true,
  debug: true,
  entry: {
    web:[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './web/index'
    ]
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
    new webpack.HotModuleReplacementPlugin()
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
        loader: sassLoaders.join('!')
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
