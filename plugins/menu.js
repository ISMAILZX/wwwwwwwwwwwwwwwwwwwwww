let fs = require ('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, money, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]  
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'main': 'ㅤM A I N',
      'absen': 'ㅤA B S E N - M E N U',
      'game': 'ㅤG A M E',
      'rpg': 'ㅤR P G',
      'xp': 'ㅤU A N G & L I M I T',
      'sticker': 'ㅤS T I C K E R',
      'kerang': 'ㅤK E R A N G - A J A I B',
      'quotes': 'ㅤQ U O T E S',
      'group': 'ㅤG R O U P',
      'premium': 'ㅤP R E M I U M',
      'anime': 'ㅤW I B U - M E N U',
      'job': 'ㅤJ O B - M E N U',
      'toko': 'ㅤT O K O - M E N U', 
      'primbon': 'ㅤP R I M B O N - M E N U',
      'islam': 'ㅤI S L A M - M E N U',
      'internet': 'ㅤI N T E R N E T',
      'berita': 'ㅤB E R I T A - M E N U',
      'nulis': 'ㅤM A K E R - M E N U',
      'serti': 'ㅤS E R T I - M E N U',
      'apk': 'ㅤA P K - M O D',
      'expression': 'ㅤE X P R E S S I O N',
      'logo': 'ㅤL O G O - M E N U',
      'anonymous': 'ㅤA N O N Y M O U S - C H A T',
      'downloader': 'ㅤD O W N L O A D',
      'sound': 'ㅤS O U N D - M E N U',
      'stalk': 'ㅤS T A L K - M E N U',
      'tools': 'ㅤT O O L S',
      'fun': 'ㅤF U N',
      'owner': 'ㅤO W N E R',
      'host': 'ㅤH O S T',
      'advanced': 'ㅤA D V A N C E D',
      'info': 'ㅤI N G F O',
      '': 'ㅤN O - C A T E G O R Y',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
❕ *INFO*  : kini bot menjual nomor OTP canada, ketik *.toko* untuk melihat produk lainnya.

❏  \`\`\`A N D Y - B O T Z\`\`\`
├
├ N A M A : \`\`\`${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}\`\`\`
├ J A M : \`\`\`%time\`\`\`
├ T O T A L - U S E R : \`\`\`%totalreg\`\`\`
├ H A R I : \`\`\`%week %weton\`\`\`
├ T A N G G A L : \`\`\`%date\`\`\`
├ T G L - I S L A M : \`\`\`%dateIslamic\`\`\`
├ U P - T I M E - B O T : \`\`\`%uptime\`\`\`
├ S C - O R I : 
├ \`\`\`github.com/Nurutomo/wabot-aq\`\`\`
├ R E C O D E : \`\`\`A N D Y - O F F C\`\`\`
├ O W N E R : \`\`\`wa.me/6285795431803\`\`\`
├ 
└
%readmore`
    let header = conn.menu.header || '❏ ```%category```\n'
    let body   = conn.menu.body   || '❏  *%cmd%islimit*'
    let footer = conn.menu.footer || '\n'
    let after  = conn.menu.after  || '❏ ㅤ```T E N G S - T O``` \n\n*N U R U T O M O*\n*A N T I - B O T*\n*A N D Y - B O T Z*\n*A R I F F B*\n*W I L D A N - I Z Z U D I N*\n*D R A W L - N A G*\n\n❏ ㅤ```T E N G S - T O - T E A M``` \n\n*A N D Y × A N T I - B O T Z - O F F C*\n*A R G I O - D E V*'
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => ''+replace[name])
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => ''+replace[name])
conn.fakeReply(m.chat, `tak loading, sek yh!!!`, '0@s.whatsapp.net','*Hadehhhhhhh*')
conn.reply(m.chat, text.trim(),  {
 key: {
  participant: '0@s.whatsapp.net',
  remoteJid: 'status@broadcast'
 },
 message: {
  imageMessage: {
   caption: `*Waduh*`,
   jpegThumbnail: fs.readFileSync(`./src/okok.jpg`)
  }
 }
})

  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^hah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}


