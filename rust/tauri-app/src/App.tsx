import React, { useEffect } from "react";
import logo from "./logo.svg";
import tauriCircles from "./tauri.svg";
import tauriWord from "./wordmark.svg";
import "./App.css";
// 导入 invoke 方法
import { invoke } from "@tauri-apps/api/tauri";

function App() {
    useEffect(() => {
        // DOM 内容加载完成之后，通过 invoke 调用 在 Rust 中已经注册的命令
        invoke("close_splashscreen");
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="inline-logo">
                    <img
                        src={tauriCircles}
                        className="App-logo rotate"
                        alt="logo"
                    />
                    <img
                        src={tauriWord}
                        className="App-logo smaller"
                        alt="logo"
                    />
                </div>
                <a
                    className="App-link"
                    href="https://tauri.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Tauri App
                </a>
                <img src={logo} className="App-logo rotate" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
