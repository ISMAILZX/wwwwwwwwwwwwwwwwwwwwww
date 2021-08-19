const { MessageType } = require("@adiwajshing/baileys")
let moment = require ('moment-timezone')
let handler = async (m, { conn, usedPrefix }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]  
let { limit, exp, money, lastclaim, registered, regTime, role, age, level } = global.DATABASE.data.users[m.sender]
let text = `
\`\`\`Hi, ${ucapan()} ${ucapin()} ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}\ ✨\`\`\`

\`\`\`Money kamu\`\`\` : *${Number(money).toLocaleString().replace(/,/g, '.')}*
\`\`\`XP kamu\`\`\` : *${Number(exp).toLocaleString().replace(/,/g, '.')}*
\`\`\`Limit kamu\`\`\` : *${Number(limit).toLocaleString().replace(/,/g, '.')}*
\`\`\`Role kamu\`\`\` : *${role}*
\`\`\`Level kamu\`\`\` : *${level}*

\`\`\`NOTE - BOT TIDAK AKAN MERESPON DI DALAM GRUP JIKA PESAN SEMENTARA TIDAK DIMATIKAN.\`\`\`
`.trim()

await conn.send3Button(m.chat, text.trim(), '© A N D Y - B O T Z', 'Menu', '.hah', 'Owner', '.owner', 'Donasi', '.donasi', { quoted: m })
}
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
function ucapin() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "🌃"
    if (time >= 4) {
        res = "🌄"
    }
    if (time > 10) {
        res = "☀️"
    }
    if (time >= 15) {
        res = "🌆"
    }
    if (time >= 18) {
        res = "🌉"
    }
    return res
}