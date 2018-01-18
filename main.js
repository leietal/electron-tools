const electron = require('electron')
const app = electron.app
const Tray = electron.Tray
const Menu = electron.Menu
const nativeImage = electron.nativeImage
const BrowserWindow = electron.BrowserWindow
const globalShortcut = electron.globalShortcut;
const clipboard = electron.clipboard;

const path = require('path')
const url = require('url')
const ipc = electron.ipcMain

let mainWindow

// 创建新的窗口
function createWindow() {
  let opt = {
    width: 1000,
    height: 400,
    minWidth: 600,
    minHeight: 200,
    title: "雷佳佳的工具箱",
    // frame: false,
    // transparent: true,
    icon: path.join(__dirname, 'icon_48.ico')
  }
  mainWindow = new BrowserWindow(opt)

  // 加载一个本地页面
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'demo.html'),
    protocol: 'file:',
    slashes: true
  }));

  // 监听窗口关闭事件
  mainWindow.on('closed', function() {
    mainWindow = null
  })

  // 设置进度条
  mainWindow.setProgressBar(0);

  // 不显示菜单
  // mainWindow.setMenu(null);

  // ------------ 设置系统托盘 ------------
  var trayMenuTemplate = [{
      label: "设置",
      click: function() {}
    },
    {
      label: "退出",
      click: function() {}
    }
  ];
  // 系统托盘图标
  var tray = new Tray(path.join(__dirname, 'icon_48.ico'));
  // 系统托盘右键菜单
  var contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
  tray.setContextMenu(contextMenu);
  // 系统托盘提示标题
  tray.setToolTip('雷佳佳的工具箱');

  var webContents = mainWindow.webContents;

  // 注册一个快捷键
  // globalShortcut.register("ctrl+1", function(){
  //   var data = clipboard.readText();
  //   webContents.send("clipboard-write", data);
  // });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}


// 加载完成后创建一个新的窗口
app.on('ready', createWindow)

// 关闭所有窗口事件
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
