const { contextBridge } = require('electron');
const ipc = require('electron').ipcRenderer

contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
          ipc.send('notify', message);
        }
      },
});