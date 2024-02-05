
// 引入 electron 的 app 和 BrowserWindow 模块
const {app, BrowserWindow} = require('electron');

// 在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.on('ready', () => {
    console.log('Hello from Electron');
    // 创建一个新的浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    });

    // 加载 index.html
    win.loadFile('./src/main.html');
})