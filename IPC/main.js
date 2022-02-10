const { BrowserWindow } = require("electron");
const electron = require("electron");

const { app, dialog } = electron;

const ipc = electron.ipcRenderer

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({})
    mainWindow.loadFile("index.html")

})
ipc.on("open-error-dialog", ()=>{
    dialog.showErrorBox("As a error Message", "Demo error massage")
})