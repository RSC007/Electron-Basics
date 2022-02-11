const  electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
          contextIsolation: false,
          nodeIntegration: true
        }
      })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})