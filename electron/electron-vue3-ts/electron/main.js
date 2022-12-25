const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 980,
    height: 680,
    // transparent: true,
    // fullscreen: true,
    // frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });


  if (NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:3000/");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "../dist/index.html")}`);
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

