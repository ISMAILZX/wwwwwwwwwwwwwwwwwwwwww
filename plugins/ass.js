let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ass?APIKEY=HIRO', '', 'sange~an', m)
  
}
handler.help = ['ass']
handler.tags = ['main']
handler.command = /^(ass)$/i

handler.limit = true
handler.group = true
handler.premium = true

module.exports = handler
