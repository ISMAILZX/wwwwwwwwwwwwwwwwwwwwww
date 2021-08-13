let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  await m.reply('_Sebentar kawan..._')
  if (!text) throw 'Mau play apa? video apa music?\nkalau music #play, kalau video #play2'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'Semua server tidak bisa :/'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
*${isLimit ? 'Pakai ': ''}Link:* ${dl_link}
*Server y2mate:* ${usedServer}
\`\`\`TUNGGU SEKITAR 2 MENIT, BOT SEDANG MENGIRIM AUDIO, DIMOHON UNTUK TIDAK SPAM! JIKA TIDAK TERKIRIM, ULANGI LAGI PERINTAH YANG SAMA!\`\`\`
`.trim(), m)
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
*Server y2mate:* ${usedServer}
\`\`\`NIH KAK VIDEONYA SUDAH AKU KIRIM, TINGGAL DIDOWNLOAD AJA, BILANG APA ^_^!\`\`\`
`.trim(), m, false, _thumb || {})
}
handler.help = ['play', 'play2']
handler.tags = ['premium']
handler.command = /^play2?$/i
handler.register = false
handler.premium = true

handler.exp = 0
handler.limit = true

module.exports = handler

