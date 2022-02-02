// webpack.common.js
const { resolve } = require("path");
const config = require("./config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getCssLoaders } = require("./utils");

module.exports = {
    entry: {
        app: [
            ...(config.isDev ? ['react-hot-loader/patch'] : []),
            resolve(__dirname, "../src/index.tsx"),
        ],
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 },
                    },
                    "less-loader",
                ],
            },
            {
                test: /\.(tsx?|js)$/,
                loader: "babel-loader",
                options: { cacheDirectory: true },
                exclude: /node_modules/,
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1024,
                            name: "[name].[contenthash:8].[ext]",
                            outputPath: "assets/images",
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contenthash:8].[ext]",
                            outputPath: "assets/fonts",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "../public/index.html"),
            // filename: "index.html",
            title: config.PROJECT_NAME,
            cache: false,
        }),
    ],
    resolve: {
        alias: { "@": resolve(__dirname, "../src") },
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
};
