const webpack = require("webpack");

module.exports = {
    entry: {
        js: __dirname + "/src/js/entry.js"
    },
    output: {
        path : __dirname + '/dist/js',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']//importしているファイルの拡張子
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()//minify
    ]
};