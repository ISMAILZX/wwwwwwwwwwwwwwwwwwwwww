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
//let thumb = 'https://telegra.ph/file/76baada40eccc99dd3c25.jpg' 
 /*const freply = {
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
} */
const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

const freply = {
  key: {
  participant: '0@s.whatsapp.net',
  remoteJid: 'status@broadcast'
 },
 message: {
  imageMessage: {
   caption: `${pickRandom(['*Wis*','*xixi*','*cans cuk*','*kawaii*','*hemhe*'])}`,
   jpegThumbnail: fs.readFileSync(`${pickRandom(['./src/alfita.jpg','./src/fita.jpg','./src/fitacans.jpg'])}`)
  }
 }
}

/*const freply = {
  	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6285795431803-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '27', 
                 'gifPlayback': 'true', 
                 'caption': `${pickRandom(['Wis','xixi','cans cuk','kawaii','hemhe'])}`,
                 'jpegThumbnail': fs.readFileSync(`${pickRandom(['./src/alfita.jpg','./src/fita.jpg','./src/fitacans.jpg'])}`)
                        }
                       }
	                  }*/
let { limit, exp, money, lastclaim, registered, regTime, role, age, level } = global.DATABASE.data.users[m.sender]
let text = `
\`\`\`Hi, ${ucapan()} ${ucapin()} @${who.replace(/@.+/, '')} ✨\`\`\`

\`\`\`NOTE - BOT TIDAK AKAN MERESPON DI DALAM GRUP JIKA PESAN SEMENTARA TIDAK DIMATIKAN.\`\`\`
`.trim()

/*   await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), text.trim(), '© A N D Y - B O T Z', 'Menu', `.huh`, 'Owner', `.owner`, m, true, { sendEphemeral: true }) */

 await conn.send2ButtonImg(m.chat, text.trim(), `./src/logo.jpg`, `sekarang jam\n\n${wib} WIB\n${wita} WITA\n${wit} WIT\n\n© A N D Y - B O T Z`, 'Menu', '.huh', 'Owner', '.owner', { quoted: freply, sendEphemeral: true, contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 135,                 isForwarded: true ,"externalAdReply": {
          "title": `${pickRandom(['palpale','awokwkwkw','awikwok','duk tak duk'])}`,
          "body": `${pickRandom(['follow bang','© andyjavadams','Kok bisa bang','Waduh bang','Pencet lah'])}`,
          "mediaType": "1",
          "thumbnailUrl": `${pickRandom(['https://telegra.ph/file/6e33a92a7917a6da614c8.png','https://telegra.ph/file/4d55bd6548fe15f3929e8.png','https://telegra.ph/file/358bd1243061f415225e2.png','https://telegra.ph/file/8208c148ab682cf7bd12a.png'])}`,
          "mediaUrl": `${pickRandom(['https://instagram.com/andy.official08_','https://instagram.com/andybotz.official_','https://github.com/andyjavadams','https://wa.me/6285795431803?text=Sv+bang'])}`,
     //     "thumbnail": "https://i.ibb.co/ysTv8wY/Screenshot-20210808-112316.png",
         "sourceUrl": `${pickRandom(['https://instagram.com/andy.official08_','https://instagram.com/andybotz.official_','https://github.com/andyjavadams','https://wa.me/6285795431803?text=Sv+bang'])}`,
           }}})
 
 
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
function umcap() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Dimni hamri"
    if (time >= 4) {
        res = "pamgi beb"
    }
    if (time > 10) {
        res = "simyang beban"
    }
    if (time >= 15) {
        res = "somre syg"
    }
    if (time >= 18) {
        res = "mamlem by"
    }
    return res
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}