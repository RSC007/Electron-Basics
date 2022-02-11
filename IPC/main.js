const { BrowserWindow } = require("electron");
const electron = require("electron");

const { app, dialog } = electron;

const ipc = electron.ipcMain

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    mainWindow.loadFile("index.html")

})

// for dialog
ipc.on("open-error-dialog", (event)=>{
    dialog.showErrorBox("As a error Message", "Demo error massage")
    event.sender.send("opned-error-massage", "Main process opened the error dialog")
})

// for async operations
ipc.on("async-reply", (event)=>{
    console.log("async-reply called", event)
    event.sender.send("async-replied", "async-reply called from main Renderer")
})

// for sync operation
ipc.on("sync-message", (event)=>{
    event.returnValue = 'sync-reply'
})