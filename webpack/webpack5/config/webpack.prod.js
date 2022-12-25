const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.base");

// 设置 常量
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const prodConfig = {
    mode: "production",
    devtool: "hidden-source-map",
    module: {
        rules: [
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[contenthash][ext]", // generator的优先级高于output里的优先级
                },
            },
            {
                test: /\.webp$/,
                type: "asset", // asset通用资源类型会在 asset/inline 和 asset/source 自动选择
                generator: {
                    filename: "images/[contenthash][ext]", // generator的优先级高于output里的优先级
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024, // 当资源文件大于8kb时生成资源文件(asset/source)，否则生成base64（inline)
                    },
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: false,
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
            chunkFilename: "[id].css",
        }),
    ],
};

module.exports = merge(common, prodConfig);
