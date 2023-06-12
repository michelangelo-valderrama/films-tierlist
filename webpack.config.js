const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js'
    },
    devServer: {
        static: './src',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }), 
        new CopyPlugin({
            patterns: [
                { from: "./src/css", to: "css" },
                { from: "./src/img", to: "img" }
            ],
        }),
    ],
};