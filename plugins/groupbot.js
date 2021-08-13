let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
https://chat.whatsapp.com/INxbycxSIoKJ3TfEcWWnZR
https://chat.whatsapp.com/FVXHSkiiVamAPizBW1o6HO
https://chat.whatsapp.com/EbBq9G2zSwcCEIOy0pPPoT
https://chat.whatsapp.com/FM7SOVtUWq8CMXLf0uOAQJ
https://chat.whatsapp.com/HHLI7vA2mdKCpZldjUAVxJ
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*apa itu?*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(gb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
