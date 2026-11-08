const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    title: 'Horloge mondiale',
    autoHideMenuBar: true,          // cache la barre de menu Fichier/Édition…
    icon: path.join(__dirname, 'PDP.ico')   // optionnel, voir plus bas
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
