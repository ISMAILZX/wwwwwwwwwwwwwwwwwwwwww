global.DeveloperMode = 'false' //true Or false
global.owner = ['6285795431803','6282164659362', '6282331033919'] // Put your number here
global.mods = ['6282331033919','6285795431803','6282164659362']  // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
/*global.prems = ['6282331033919','62895604506489',  '6285795431803','6282164659362','6285336621105','6285821918425','6285856430321','6281232373549','6282131587252','6283844878048','6283819290307','6285656620756','6282215157003','6285343876512','6287880900584','6282211224927',] // Premium user has unlimited limit*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ya gitu bang, harus beli',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = 'ANDY BOTZ'
global.author ='+6282164659362'

global.multiplier = 1000 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
