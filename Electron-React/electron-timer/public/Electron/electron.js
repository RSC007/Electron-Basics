const path = require("path");
const fs = require("fs");

const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

let capturePage = null;
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "./preload.js"), // use a preload script
    },
  });

  capturePage = win.webContents.capturePage();

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // Open the DevTools.
  if (isDev) {
    // win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("notify", (_, message) => {
  dialog.showErrorBox("Demo Message", message);
});

// create-window
ipcMain.on("create-window", (_, title) => {
  console.log("title", title);
  createWindow();
});

ipcMain.on("close-all-window", () => {
  app.quit();
});

ipcMain.on("take-screenshot", () => {
  capturePage.then((image) => {
    //writing  image to the disk
    fs.writeFile(`test.png`, image.toPNG(), (err) => {
      if (err) throw err;
      console.log("Image Saved");
    });
  });
});
