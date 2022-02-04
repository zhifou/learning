// webpack.base.js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const paths = require("./paths");
const VersionPlugin = require("./plugins/version-plugin");

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
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
            },
            {
                use: ["style-loader", "css-loader", "less-loader"],
                test: /\.(css|less)$/,
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
        ],
    },
    resolve: {
        extensions: ["ts", ".tsx", ".js", ".json", ".jsx"],
        alias: {
            "@": paths.src,
            "@c": paths.src + "/components",
            "@m": paths.src + "/model",
            "@s:": paths.src + "/services",
            "@t": paths.src + "/types",
        },
    },
    plugins: [
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
