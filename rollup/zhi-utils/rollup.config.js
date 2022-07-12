/**
 * @file rollup.config.js 打包配置
 * @author zhifou<zhifou80@163.com>
 */
import typescript from "@rollup/plugin-typescript"; // typescript插件
import json from "@rollup/plugin-json"; // 允许从json中导入数据
import nodeResolve from "@rollup/plugin-node-resolve"; // 帮助寻找node_modules里的包
import commonjs from "@rollup/plugin-commonjs"; // 将非ES6语法的包转为ES6可用
import babel from "@rollup/plugin-babel"; // rollup 的 babel 插件，ES6转ES5
import dev from "rollup-plugin-dev"; // 开启本地服务器
import livereload from "rollup-plugin-livereload"; // 开启热更新
import { terser } from "rollup-plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";

import pkg from "./package.json";

export default {
    input: "src/index.ts", // 入口文件
    output: [
        {
            // 不同类型的出口文件
            file: pkg.main,
            format: "cjs", // CommonJS
            exports: "auto",
        },
        {
            file: pkg.module,
            format: "es", // ES模块文件
            exports: "auto",
        },
        {
            file: pkg.browser,
            format: "umd", // 通用模块定义，以amd，cjs和iife为一体
            name: "zhi-utils",
            exports: "auto",
        },
    ],
    plugins: [
        json(),
        typescript(),
        nodeResolve({
            browser: true,
            main: true,
        }),
        commonjs(),
        babel({
            exclude: "node_modules/**", // 忽略 node_modules
            babelHelpers: true, // 开启体积优化
        }),
        process.env.ENV === "prod" ? terser() : null,
        process.env.ENV === "dev" ? livereload() : null,
        process.env.ENV === "dev"
            ? dev({
                  port: 8888,
                  dirs: "",
              })
            : null,
        process.env.ENV === "prod" ? visualizer() : null,
    ],
    watch: {
        exclude: "node_modules/**",
        include: "src/**",
    },
};
