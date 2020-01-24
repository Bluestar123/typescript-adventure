const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
var path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules')
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: path.resolve(__dirname, 'node_modules')
        }]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        stats: 'errors-only',
        compress: true,
        host: 'localhost',
        port: 8089,
        open: true
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ]
}