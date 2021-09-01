let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require ('fs')
let moment = require ('moment-timezone')
let handler = async (m, { conn, usedPrefix }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let { nama } = global.DATABASE.data.users[who]
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//tonst freply = {
  //key : {
  //participant: '0@s.whatsapp.net',
//  remoteJid: 'status@broadcast'
// },
// message: {
  //imageMessage: {
   //: `*Keren pamrah*`,
   //jpegThumbnail: fs.readFileSync(`./src/alfita.jpg`)
  //}
 //}
//}
let thumb = 'https://telegra.ph/file/76baada40eccc99dd3c25.jpg' // upload foto mu, terus masukin url nya disini
const freply = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6285795431803@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./src/okok.jpg`) //Gambarnye
					},
					"title": "ANDY-BOTZ", //Kasih namalu 
					"description": "© ANDY-OFFC", 
					"currencyCode": "USD",
					"priceAmount1000": "6850000",
					"retailerId": "andyjavadams",
					"productImageCount": 623
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
let { limit, exp, money, lastclaim, registered, regTime, role, age, level } = global.DATABASE.data.users[m.sender]
let text = `
\`\`\`Hi, ${ucapan()} ${ucapin()} @${who.replace(/@.+/, '')} ✨\`\`\`

\`\`\`NOTE - BOT TIDAK AKAN MERESPON DI DALAM GRUP JIKA PESAN SEMENTARA TIDAK DIMATIKAN.\`\`\`
`.trim()

let mentionedJid = [who]
   await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), text.trim(), '© A N D Y - B O T Z', 'Menu', `.huh`, 'Owner', `.owner`, m, true, { sendEphemeral: true })

// await conn.send2ButtonImg(m.chat, text.trim(), "./src/logo.jpg", "© A N D Y - B O T Z", 'Menu', '.huh', 'Owner', '.owner', { quoted: freply, sendEphemeral: true, contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 135, isForwarded: true }})
 
 
//await conn.send3Button(m.chat, text.trim(), '© A N D Y - B O T Z', 'Menu', '.hah', 'Owner', '.owner', 'Donasi', '.donasi')
//const buttons = [
 // {buttonId: '.hah', buttonText: {displayText: 'Menu'}, type: 1},
//  {buttonId: '/donasi', buttonText: {displayText: 'Donasi'}, type: 1},
 // {buttonId: '/owner', buttonText: {displayText: 'Owner'}, type: 1}
//]
//const buttonMessage = {
   // contentText: text.trim(),
   // footerText: '© A N D Y - B O T Z',
  //  buttons: buttons,
   // headerType: 1 // change for file type // change for file type
//}
//const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
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