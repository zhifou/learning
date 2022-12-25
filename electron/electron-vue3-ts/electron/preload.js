//允许vue项目使用 ipcRenderer 接口, 演示项目中没有使用此功能
const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("ipcRender", ipcRenderer);

