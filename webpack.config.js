const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebapckPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebapckPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    contentBase: "public/",
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: [".js", "jsx"]
  }
};
