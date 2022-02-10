const electron = require("electron")

const ipc = electron.ipcRenderer

const alertBtn = document.getElementById("alert")

alertBtn.addEventListener(("click"), ()=>{
    // ipc.send("open-error-dialog")
    console.log("daaaddda")
})