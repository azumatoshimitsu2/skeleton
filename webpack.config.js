// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                    use: ['css-loader', 'sass-loader']
                })
            },
            //file-loaderがsrcからdistフォルダにイメージをコピーする（webpack-serverに必要）
            //{
            //    test: /\.(jpg|png|gif|svg|ico)$/,
            //    use: [
            //        {
            //            loader: 'file-loader',
            //            options: {
            //                name: '[name].[ext]',
            //                outputPath: 'img/'
            //            }
            //        }
            //    ]
            //}
        ]
    },
    plugins: [
        // CSS
        new ExtractTextPlugin("assets/css/styles.css"),
        // HTML
        //new HtmlWebpackPlugin({
        //    inject: false, // CSSとJavaScriptを自動的に挿入する
        //    hash: true,
        //    template: './src/index.html',
        //    filename: './index.html'
        //}),
        // srcからdistフォルダに画像をコピーする
        //new CopyWebpackPlugin([
        //    {
        //        from: 'src/img',
        //        to: 'assets/img'
        //    } 
        //]),
        // srcフォルダからdistフォルダにJavaScriptのlibs（例：jQuery）をコピーする
        new CopyWebpackPlugin([
            {
                from: 'src/js/libs',
                to: 'assets/js'
            } 
        ]),
    ],
};