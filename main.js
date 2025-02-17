// console.log("processo Principal")



const { app, BrowserWindow, nativeTheme ,Menu } = require('electron')
// Janela principal
let win
const createWindow = () => {
nativeTheme.themeSource = 'dark'
   win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/img/pc.png',
   // resizable: false   /* remover a ação de minimizar tela */
  // autoHideMenuBar: true, /* remover a ação de menu tela */
   //minimizable: false,
   resizable:false

 })

 // menu personalizado 
Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  win.loadFile('./src/views/index.html')
}

// janela sobre
const aboutwindow = () => {
    const about = new BrowserWindow({
        width: 360,
        height: 220,
        icon: './src/img/pc.png',
        autoHideMenuBar:true,
        resizable: false
    })

    about.loadFile('./src/views/sobre.html')

}



// iniciar aplicação
app.whenReady().then(() => {
  createWindow()
  aboutwindow()
})


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  

  // template do menu

  const template = [
    {
        label: 'arquivo',
        submenu: [
            {
                label:'Sair',
                click: () => app.quit(),
                accelerator: 'ALT+F4'
            }
        ]
    },
    {
        label: 'Exibir'
    },
    {
        label: 'Ajuda'
    }
  ]
  