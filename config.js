global.DeveloperMode = 'false' //true Or false
global.owner = ['6285795431803','6282164659362', '6282331033919'] // Put your number here
global.mods = ['6282331033919','6285795431803','6282164659362']  // Want some help?
global.prems = ['6282331033919','6285795431803','6282164659362','6285821918425','628990745458','6283844878048'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'belilah'
}

// Sticker WM
global.packname = 'ANDY BOTZ'
global.author ='+6282164659362'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
