const electron = require("electron")

const { app, Menu, BrowserWindow, MenuItem, globalShortcut } = electron

var win;
const CreateWindow = () => {
    win = new BrowserWindow({})
    win.loadFile("index.html")
}
app.on("ready", () => {
    CreateWindow()

    const template = [
        {
            label: "Edit",
            submenu: [
                { role: "copy" },
                { type: "separator" },
                { role: "paste" },
                { role: "selectall" },
            ]
        },
        {
            label: "Help",
            submenu: [
                {
                    label: "Go GitHub",
                    click: () => {
                        electron.shell.openExternal("https://github.com/")
                    },
                    accelerator: "CmdOrCtrl + Shift + H"
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const ctxMenu = new Menu()
    ctxMenu.append(new MenuItem({ label: "Hello" }))

    ctxMenu.append(new MenuItem({ role: "selectall" }))

    win.webContents.on("context-menu", (e, params) => {
        ctxMenu.popup(win, params.x, params.y)
    })

    // global short cut for window
    globalShortcut.register("Alt + 1", ()=>{
        win.show()
    })

})

app.on("will-quit", ()=>{
    globalShortcut.unregisterAll()
})