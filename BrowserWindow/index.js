const  electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", ()=>{
    const Parent = new BrowserWindow({ title: "Parent" })
    const Child = new BrowserWindow({ parent: Parent, show: false, modal: true, title: "Child" })

    Child.loadURL("https://github.com")
    Child.once("ready-to-show", ()=>{
        Child.show()
    })
})