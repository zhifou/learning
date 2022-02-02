//webpack.prod.js
const webpack = require('webpack');
const path = require('path');
const { merge } = require("webpack-merge");
const glob = require("glob");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "js/bundle.[name].[hash:8].js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new PurgeCSSPlugin({
            paths: glob.sync(
                `${path.resolve(__dirname, "../src")}/**/*.{tsx,scss,less,css}`,
                {
                    nodir: true,
                }
            ),
            whitelist: ["html", "body"],
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/assets/fonts', to: 'assets/fonts' },
                // { from: 'public/resources', to: 'resources' },
            ],
        }),
        new webpack.BannerPlugin({
            raw: true,
            banner: "/** @preserve Powered by chenwl */",
        }),
    ],
});
