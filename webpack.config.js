const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        new CopyPlugin([
            {from: '_redirects'}
        ])
    ],
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true
    }
};
