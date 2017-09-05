const https = require('https')
const fs = require('fs')

const fileName = 'ReactiveTraderInstaller'
const appJSONUrl = 'https://raw.githubusercontent.com/PawelAP/ReactiveTraderCloud/feature/openfin-upgrade/src/client/config/openfin/demo.app.json'

const file = fs.createWriteStream('install/ReactiveTraderCloud-demo.zip')
const request = https.get(`https://dl.openfin.co/services/download?fileName=${fileName}&config=${appJSONUrl}`, function(response) {
  response.pipe(file)
})
