// console.log("processo Principal")



const { app, BrowserWindow, nativeTheme ,Menu, shell} = require('electron')
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

// Janela secudaria

const childWindow = () => {
  const father = BrowserWindow.getFocusedWindow()
  if (father) {
    const child = new BrowserWindow({
      width: 640,
      height: 220,
      icon: './src/p/img/pc.png',
      autoHideMenuBar: true,
      resizable: false,
      parent: father,
      modal: true
      
    })
    child.loadFile('./src/views/child.html')
  }
}

// iniciar aplicação
app.whenReady().then(() => {
  createWindow()
 // aboutwindow()
})


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

// reduzir logs

app.commandLine.appendSwitch('log-level', '3')
  

  // template do menu

  const template =[
    {
      label:'Cadastrar',
      submenu: [
          {
            label: 'Clientes'
          },
          {
              label: 'Os'
          },
          {
            type:'separator' 
          },
          {
              label: 'Sair',
              click: () => app.quit(),
              accelerator: 'ALT+F4'
          }
  
      ]      
      },
  
      {
          label:'Arquivo',
          submenu: [
            {
              label: 'Janela Secundária',
              click: () => childWindow()
            },
              {
                  label: 'Sair',
                  click: () => app.quit(),
                  accelerator: 'ALT+F4'
              }
          ]      
      },
      {
          label: 'Exibir',
          submenu: [
              {
                  label:'Recarregar',
                  role:'reload'
              },
              {
                  label:'Ferramentas do desenvolvedor',
                  role:'toggleDevTools' /* Exbir a tela de desenvolvimento */
              },
              {
                  type:'separator' /* crua uma linha para separar grupos do submenu */
              },
              {
                  label: 'Aplicar zoom',
                  role: 'zoomIn'
              },
              {
                  label: 'Reduzir',
                  role: 'zoomOut'
              },
              {
                  label: 'Restaurar o zoom padrão',
                  role: 'ResetZoom'
              }
          ]      
      },
      {
          label: 'Ajuda',
          submenu: [
            {
              label: 'Docs',
              click: () => shell.openExternal('https://github.com/lucashenriquepereirasilva/Lucas.TI')
            },
            {
              type:'separator'
            },
            {
              label: 'sobre',
              click: () => aboutwindow ()
            } 
          ]
      }
  ]