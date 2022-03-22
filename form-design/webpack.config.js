const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
  const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
  CssPlugin = require("extract-css-chunks-webpack-plugin"),


module.exports={
  mode:"production",
    entry: 
    {index:path.resolve(__dirname, "src", "index.js"),
    login:path.resolve(__dirname, "src", "login.js")},
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
          test: /\.(jpg|gif|png|svg|cur)$/,
          use: [{
              loader: "file-loader",
              options: {
                         name: "[name].[ext]",
                         publicPath:'img/'
                      },
              }]
      }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new ExtractCssChunks({
        filename: `./css/[name].[contenthash].css`
    }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        filename:"index.html"
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "signup.html"),
        filename:"signup.html"
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "welcome.html"),
        filename:"welcome.html"
      }),
      new ExtractCssChunks(),
      ]
    }
