const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.sass$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                      loader: "sass-loader",
                      options: {
                        implementation: require("sass"),
                      },
                    },
                  ],
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        name(file) {
                            if (process.env.NODE_ENV === 'development') {
                            return '[path][name].[ext]';
                            }
                            return '[contenthash].[ext]';
                        }
                        }
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}