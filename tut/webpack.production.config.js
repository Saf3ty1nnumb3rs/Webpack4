const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { 
        'hello-world': './src/index.js',
        'katsu': './src/katsu.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath tells webpack where assets are
        publicPath: ''
    },
    mode: 'production',
    module: {
        // All loaders must be saved as regular dependencies
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ 'transform-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            chunks: ['hello-world'],
            filename: 'hello-world.html',
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: 'Some description',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['katsu'],
            filename: 'katsu.html',
            title: 'Katsu Image',
            template: 'src/page-template.hbs',
            description: 'Katsu',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            }
        }),
    ]
}