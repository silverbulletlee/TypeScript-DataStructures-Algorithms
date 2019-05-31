/**
 * @file webpack.config.js
 * @author silverbulletlee
 * @Date 2019.04.17
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const address = require('address');
const opn = require('opn');

const ipv4 = address.ip() || '127.0.0.1';
const port = 3000;

module.exports = {
    entry: './dev/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'index_[hash:8].js'
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            title: '数据结构与算法TypeScript实现'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "output"),
        port,
        host: '0.0.0.0',
        after: () => {
            // TODO 优化浏览器多次打开同一地址
            opn(`http://${ipv4}:${port}`);
        }
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            '@utils': path.resolve(__dirname, './src/utils'),
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/, 
                loader: "ts-loader"
            }
        ]
    }
};
