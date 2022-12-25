import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// 导入 invoke 方法
import { invoke } from "@tauri-apps/api/tauri";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// 添加监听函数，监听 DOM 内容加载完成事件
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // DOM 内容加载完成之后，通过 invoke 调用 在 Rust 中已经注册的命令
        invoke("close_splashscreen");
    }, 2000);
});
