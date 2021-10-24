let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 40
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	if (!text) return conn.reply(m.chat, 'jumlahnya brapa?',m)
	for (let i = 0; i <`${text}`; i++) {
await conn.toggleDisappearingMessages(m.chat, 0,m)
}
}
handler.help = ['bbc'].map(v => v + ' <Query>')
handler.tags = ['toos']
handler.command = /^bbc$/i
handler.owner = true 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 15
module.exports = handler