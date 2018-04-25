// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        // JavaScriptソース
        main: "./src/js/entry.js"
    },
    output: {
        // ベースフォルダ
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/bundle.js',
    },
    resolve: {
        extensions: ['.js']//importしているファイルの拡張子
    },
    module: {
        rules: [
            // JavaScriptルール(ESLint)を使う
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            // },
            // BabelがJavaScriptを翻弄する
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // SASSからCSSを作成する
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                url: false
                            }
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        // CSS Stylelint
        new StyleLintPlugin({/* Options */}),
        // CSS
        new ExtractTextPlugin({
            filename: "assets/css/styles.css"
        }),
        // srcフォルダからdistフォルダにJavaScriptのlibs（例：jQuery）をコピーする
        new CopyWebpackPlugin([
            {
                from: 'src/js/libs',
                to: 'assets/js'
            } 
        ]),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            host: 'localhost',
            port: 3000,
            files: ['./dist/*'],
            server: { baseDir: ['dist'] }
        })
    ],
};