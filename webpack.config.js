const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

    return {
        entry: {
            app: path.join(__dirname, 'src/app.js'),
        },
        output: {
            filename: '[name].[hash].js',
            path: path.join(__dirname, 'build'),
        },
        resolve: {
            extensions: ['*', 'js', 'jsx'],
        },
        devtool: 'cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        options: { presets: ['es2015', 'react'] }
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src/index.html'),
            })
        ],
    }
}

