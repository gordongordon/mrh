const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//require("babel-polyfill");

// the clean options to use
let cleanOptions = {
  root:  path.resolve(__dirname, '../node_modules/react-simple-chatbot'),
}

module.exports = {
    entry: path.resolve(__dirname, 'lib/index'),
//  entry: [ "babel-polyfill", path.resolve(__dirname, 'lib/index')],
  
  output: {
//    entry: { index: [ "babel-polyfill", "./src/index.js" ] },
    path: path.resolve(__dirname, '../node_modules/react-simple-chatbot/dist'),
    filename: 'react-simple-chatbot.js',
    publicPath: '../node_modules/react-simple-chatbot/dist/',
    library: 'ReactSimpleChatbot',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], cleanOptions),
    // new UglifyJsPlugin({
    //   comments: false,
    // }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
};
