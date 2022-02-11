const electron = require("electron");

const { app, BrowserWindow, Tray, Menu } = electron
const path = require("path")

const iconPath = path.join(__dirname, "icon.webp")

let win;
let tray = null;

// Note: Tray Path rendering in pedding

// https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432__340.png
const createWindow = ()=>{
    win = new BrowserWindow()
    win.loadFile("index.html")
}

app.on("ready", ()=>{

    tray = new Tray(path.resolve("/home/kamal/Desktop/electron-demo/Tray-Demo/icon.webp"))

    createWindow()

    // const template = [
    //     {
    //         label: "Video",
    //         submenu: [
    //             { 
    //                 label: "1980x1400",
    //                 type: "radio"
    //             },
    //             { 
    //                 label: "1200x1450",
    //                 type: "radio"
    //             }
    //         ]
    //     },
    //     {
    //         label: "Audio",
    //         submenu: [
    //             { 
    //                 label: "low",
    //                 type: "radio",
    //                 check: true
    //             },
    //             { 
    //                 label: "high",
    //                 type: "radio"
    //             }
    //         ]
    //     }
    // ]
    // const ctxMenu = Menu.buildFromTemplate(template)
    // tray.setContextMenu(ctxMenu)
})