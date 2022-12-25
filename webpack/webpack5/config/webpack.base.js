// webpack.base.js
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const paths = require("./paths");
const getEnv = require('./webpack.env');
const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");
const VersionPlugin = require("./plugins/version-plugin");
// const myLoader = require("../src/MyLoader/my-loader");

let env;
const packageJson = path.join(__dirname, "../package.json");
try {
    env = fs.readFileSync(packageJson);
    env = JSON.parse(env);
} catch (e) {
    console.log(e);
}

module.exports = {
    entry: paths.src + "/index.tsx",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    // 先到node_modules中去找，找不到则去./loaders目录下去找
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [{
                    loader: path.resolve(__dirname, './loaders/my-loader.js'),
                    //上面的options.name中的name
                    options: {
                        name: 'zhifou.co',
                    },
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "less-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
            },
            // {
            //     test: /\.svg$/,
            //     type: "asset/inline", // 生成一个datauri 比如把svg生成base64，从而就不生成资源文件了
            // },
            // {
            //     test: /\.svg$/,
            //     use: ['@svgr/webpack'],
            // },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: true, // 解析单独引入.svg文件作为module使用
                            icon: true, // 解析svg文件作为icon图标使用
                        },
                    },
                ],
            },
            {
                test: /\.(txt|html)$/, // 页面出现的lodash.js文件变量就是html引起
                type: "asset/source", // 导出资源的源代码
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // 加载font字体资源
                type: "asset/resource", // 这个类型可以帮我们载入任何类型的资源
            },
            {
                test: /\.(csv|tsv)$/, // 加载csv文件资源
                use: "csv-loader",
            },
            {
                test: /\.xml$/, // 加载xml文件资源
                use: "xml-loader",
            },
            {
                test: /\.toml$/, // 加载toml文件资源
                type: "json",
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/, // 加载yaml文件资源
                type: "json",
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/, // 加载json5文件资源
                type: "json",
                parser: {
                    parse: json5.parse,
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
        alias: {
            "@": paths.src,
            "@c": paths.src + "/components",
            "@m": paths.src + "/model",
            "@s:": paths.src + "/services",
            "@t": paths.src + "/types",
        },
    },
    plugins: [
        new webpack.DefinePlugin(getEnv().stringified),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            meta: {
                viewport:
                    "width=device-width, initial-scale=1, shrink-to-fit=no",
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                version: env.version,
                // Will generate: <meta name="theme-color" content="#4285f4">
            },
        }),
        new VersionPlugin({
            name: "zhifou",
        }),
    ],
};
