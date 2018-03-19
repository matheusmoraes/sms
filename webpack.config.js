const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');

const root = `${__dirname}/client/src`;
const dist = `${__dirname}/client/dist`;
const paths = {
  app: `${root}/app/root.module.js`,
  styles: `${root}/styles`,
  static: {
    index: `${root}/index.html`,
    manifest: `${root}/manifest.json`,
    images: `${root}/img/**/*`,
  },
};

let API_URL;
if (process.env.NODE_ENV == 'prod') {
  API_URL = "'/'"
} else {
  API_URL = "'http://localhost:3000'"
}

// Plugins
const prep = {
  clean: new cleanPlugin([
    dist,
  ]),
  copy: new copyPlugin([{
    from: paths.static.index,
  }, {
    from: paths.static.manifest,
  }, {
    from: paths.static.images,
    to: 'img/',
    flatten: true,
  }]),
};

const extract = {
  styles: new extractPlugin('css/styles.css'),
};

// Loaders
const scripts = {
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: [
    'ng-annotate',
    'babel',
  ],
};

const styles = {
  test: /\.(sass|scss)$/,
  loader: extractPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
};

const markup = {
  test: /\.html$/,
  loader: 'ngtemplate!html',
};

const fonts = {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file?name=fonts/[name].[ext]',
};

// Config object
const config = {
  entry: {
    bundle: paths.app,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      scripts,
      styles,
      markup,
      fonts,
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ API_URL: API_URL }),
    prep.clean,
    prep.copy,
    extract.styles,
  ],
  sassLoader: {
    includePaths: [paths.styles],
  },
  output: {
    path: `${dist}/`,
    publicPath: '/',
    filename: 'js/app.[name].js',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};

module.exports = config;
