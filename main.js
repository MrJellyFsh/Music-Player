const{ app, BrowserWindow} = require('electron');
function createWindow(){
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    });
    win.loadFile('index.html');

}
app.on('ready',createWindow);

