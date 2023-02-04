const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        list: './src/list.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        environment: {
            arrowFunction: false,
            const: false,
        }
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.art$/,
                loader: "art-template-loader",
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.art',
        chunks: ['index']
    }),new HtmlWebpackPlugin({
        filename: 'list.html',
        template: './src/list.art',
        chunks: ['list']
    })],
};