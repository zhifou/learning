var webpack = require('webpack');
var WebpackBrowserPlugin = require('webpack-browser-plugin');

var ReplaceVariablePlugin = new webpack.DefinePlugin({
    VERSION: JSON.stringify("5fa3b9"),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: "1+1",
    "typeof window": JSON.stringify("object"),
    __DEV__: true
});

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build'
    },
    devServer: {
        inline: true
    },
    plugins: [
        new WebpackBrowserPlugin(),
        ReplaceVariablePlugin
    ]
};

//console.log(__dirname);