/**
 * @file webpack config
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
    entry: './test/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'index_[hash:8].js'
    },
    mode: 'development',
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
    }
};
