const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  module: {
    // rules: [
    //   {

    //   }
    // ]
  },
  // experiments: { 
  //   asyncWebAssembly: true,
  //   // syncWebAssembly: true
  // },
  // resolve: {
  //   extensions: [ '.js'],
  //   fallback: {
  //     buffer: require.resolve("buffer"),
  //     crypto: require.resolve('crypto-browserify'),
  //     process: require.resolve('process/browser'),
  //     fs: false,
  //     util: require.resolve('util/'),
  //     stream: require.resolve('stream-browserify'),
  //     path: require.resolve('path-browserify'),
  //   }
  // },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '*',
          to: 'workers',
          context: 'node_modules/worker-nest-worker/dist/workers/'
        }
      ]
    })
    // new webpack.ProvidePlugin({
    //   Buffer: ['buffer', 'Buffer'],
    //   // process: "process/browser",
    // }),
  ]
};