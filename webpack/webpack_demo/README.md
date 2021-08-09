# WebPack的简单Demo

var path = require('path');
console.log(__dirname);

module.exports = {
    entry: path.join(__dirname, 'src/js/index.js'),
    output:{
        path: path.join(__dirname, 'dist/'),
        filename: './js/bundle2.js'
    }
};


# WebPack 1.14.0的简单应用
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommmonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//console.log(webpack);
module.exports = {
    entry: {
        main: './src/js/main',
        main2 : './src/js/main.2'
    },
    output:{
        path: './dist',
        filename: './js/bundle.[name].js',
        publicPath: '/out/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    plugins:[
        new CommmonsChunkPlugin('./js/common.js', ['main','main2']),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title: 'My App R',
            filename: 'assets/admin.html'
        })
    ]
};

#Webpack1 的复杂一点的Demo
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommmonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//console.log(webpack);
module.exports = {
    entry: {
        main: './src/js/main',
        main2 : './src/js/main.2'
    },
    output:{
        path: './dist',
        filename: './js/bundle.[name].js',
        publicPath: '/out/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    plugins:[
        new CommmonsChunkPlugin('./js/common.js', ['main','main2']),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title: 'My App R',
            filename: 'assets/admin.html'
        })
    ]
};

#Webpack2