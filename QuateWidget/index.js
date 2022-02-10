const  electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", ()=>{
    const quateWindow = new BrowserWindow({ height: 200, width: 600, frame: false, show: false, backgroundColor: "#80000"})
    quateWindow.loadURL(`file://${__dirname}/index.html`)
    quateWindow.once("ready-to-show", ()=>{
        quateWindow.show()
    })
})