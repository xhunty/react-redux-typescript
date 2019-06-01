const path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
  entry: {
    index:"./src/index.tsx"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }, 
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader:"style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test:/\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [htmlPlugin]
};