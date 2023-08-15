const information = document.getElementById('info')
information.innerHTML =
  `<li>Node.js: ${window.versions.node}</li>` +
  `<li>Chromium: ${window.versions.chrome}</li>` +
  `<li>Electron: ${window.versions.electron}</li>`

  const doPing = async () => {
    const response = await window.versions.ping()
    alert(response) // prints out 'pong'
  }
  
  doPing()