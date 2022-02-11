const electron = window.require("electron")
const ipc = electron.ipcRenderer


const alertBtn = document.getElementById("alert")
const asyncBtn = document.getElementById("async")
const syncBtn = document.getElementById("sync")

// for the dialog
alertBtn.addEventListener("click", ()=>{
    ipc.send("open-error-dialog")
})

ipc.on("opned-error-massage", (event, arg)=>{
    console.log("opned-error-massage", event, arg)
})

// for async action
asyncBtn.addEventListener("click", (event)=>{
    console.log("async-reply 1")
    ipc.send("async-reply")
    console.log("async-reply 2")
})

ipc.on("async-replied", (event, arg)=>{
    console.log("async-replied------>", arg)
})

// for sync operation
syncBtn.addEventListener("click", ()=>{
    console.log("sync-reply 1")
    let reply = ipc.sendSync("sync-message")
    console.log("reply---->", reply)
    console.log("sync-reply 2")
})