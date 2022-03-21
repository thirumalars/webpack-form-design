const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
  const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports={
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].[contenthash].js',
   // filename: "my-first-webpack.bundle.js"
    },
    module: {
      rules: [
        { test: /\.txt$/, use: "raw-loader" },
        { test: /\.css$/, use: [ExtractCssChunks.loader, "css-loader"] },
        { test: /\.js$/, use: 'babel-loader' },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: 'url-loader',
          type: 'asset/resource'
        },
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      }),
      new ExtractCssChunks(),
      ]
    }
