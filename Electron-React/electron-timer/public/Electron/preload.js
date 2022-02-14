const { contextBridge } = require("electron");
const ipc = require("electron").ipcRenderer;

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      ipc.send("notify", message);
    },
  },
  newWindowCreateApi: {
    createNewWindow(title) {
      ipc.send("create-window", title);
    },
  },
  closeAllWindowApi: {
    closeAllWindow() {
      ipc.send("close-all-window");
    },
  },
  takeScreenShotApi: {
    takeScreenShot() {
      ipc.send("take-screenshot");
    },
  },
});
