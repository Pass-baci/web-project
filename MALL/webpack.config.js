const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // 模式
  mode: 'development',
  entry: {
    index: './src/pages/index/index.js',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    environment: {
      arrowFunction: false,
      const: false,
    }
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: './dist',
    hot: true,
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      api: resolve('src/api'),
      fonts: resolve('src/assets/fonts'),
      images: resolve('src/assets/images'),
      styles: resolve('src/assets/styles'),
      components: resolve('src/components'),
      pages: resolve('src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.art$/,
        loader: "art-template-loader",
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'fonst/[name].[ext]'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/pages/index/index.art',
    filename: 'index.html'
  })],
};