const ExtractTextPlugin = require("extract-text-webpack-plugin"); //use this npm i -D extract-text-webpack-plugin@next
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = {

  entry: [
      './src/index.js'
    ],

    plugins: [
      new UglifyJsPlugin(),
      new ExtractTextPlugin("[name].css")
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }
      ]
    },

    resolve: {
      extensions: ['*', '.js', '.jsx']
    },

    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },

    devServer: {
      contentBase: './public'
    }
};
