      if (user = global.DATABASE._data.users[m.sender]) {
        if (!isNumber(user.exp)) user.exp = 0
        if (!isNumber(user.limit)) user.limit = 10
        if (!isNumber(user.lastclaim)) user.lastclaim = 0
        if (!isNumber(user.price)) user.price = 0
        if (!isNumber(user.chat)) user.chat = 0
        if (!isNumber(user.lastnguli)) user.lastnguli = 0
        if (!isNumber(user.lastrepeat)) user.lastrepeat = 0
        if (!'name' in user) user.name = this.getName(m.sender)
        if (!isNumber(user.regTime)) user.regTime = -1        
        if (!isNumber(user.afk)) user.afk = -1
        if (!'afkReason' in user) user.afkReason = ''
        if (!'banned' in user) user.banned = false
      } else global.DATABASE._data.users[m.sender] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        lastnguli: 0,
        warning: 0,
        lastrepeat: 0,
        name: conn.getName(m.sender),
        regTime: -1,
        afk: -1,
        afkReason: '',
        job: "no",
        price: 0,
        chat: 0,
        whitelist: false,
        banned: false,
        isBlocked: false,
        spam: 0
      }      
      let chat
        if (chat = global.DATABASE._data.chats[m.chat]) {
        if (!'isBanned' in chat) chat.isBanned = false
        if (!'welcome' in chat) chat.welcome = false
        if (!'left' in chat) chat.left = false
        if (!'nobadword' in chat) chat.nobadword = false
        if (!'nojakarta' in chat) chat.nojakarta= false
        if (!'nolink' in chat) chat.nolink = false
        if (!'novirtex' in chat) chat.novirtex = false
        if (!'nolinkyt' in chat) chat.nolinkyt = false
        if (!'nolinktiktok' in chat) chat.nolinktiktok = false
        if (!'nohoax' in chat) chat.nohoax = false
        if (!'nohentai' in chat) chat.nohentai = false
        if (!'nokuotafree' in chat) chat.nokuotafree = false
        if (!'noemotebatu' in chat) chat.noemotebatu = false
        if (!'nospam' in chat) chat.nospam = false
        if (!'delete' in chat) chat.delete = false
        if (!'sWelcome' in chat) chat.sWelcome = ''
        if (!'sBye' in chat) chat.sBye = ''
      } else global.DATABASE._data.chats[m.chat] = {
        isBanned: false,
        welcome: false,
        left: false,
        nobadword: false,
        command: 0,
        nolink: false,
        novirtex: false,
        nohentai: false,
        nohoax: false,
        nospam: false,
        nokuotafree: false,
        nojakarta: false,
        noemotebatu: false,
        sWelcome: '',
        sBye: '',
        delete: false
      }
      
      if (global.DATABASE._data.users[m.sender]) {	
        if (!'isBanned' in global.DATABASE._data.users[m.sender])
          global.DATABASE._data.users[m.sender].isBanned = false
      } else global.DATABASE._data.users[m.sender] = {
        isBanned: false
      }
      
    } catch (e) {
      console.log(e, global.DATABASE.data)
    }
    if (opts['nyimak']) return
    if (!m.fromMe && opts['self']) return
    if (!m.text) return
    if (m.isBaileys) return
    m.exp += 0
    
    	let groupMetadata = m.isGroup ? await this.groupMetadata(m.chat) : {}
        let participants = m.isGroup ? groupMetadata.participants : []
        let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {}
        let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {}
        let isAdmin = user.isAdmin || user.isSuperAdmin || false
        let isOwner = user.isOwner || user.isSuperOwner || false
        let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false  
		let enable = global.DATABASE._data.chats[m.chat]
		let status = global.DATABASE._data.users[m.sender]
		let chats = global.DATABASE._data.chats[m.chat]
		// let uS = global.DATABASE._data.users[m.chat].block
	 	 if(enable.nospam && !status.banned && !m.fromMe) {
		global.DATABASE.data.users[m.sender].spam += 1
		var spam = global.DATABASE.data.users[m.sender].spam
		if(spam >= 20) setTimeout(() => { global.DATABASE.data.users[m.sender].spam = 0 }, 5000)
	if(enable.nospam && m.isGroup && !isAdmin && isBotAdmin && !status.banned && spam == 40) {
		conn.updatePresence(m.chat, Presence.composing) 
		return conn.reply(m.chat, `*Over Spam!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].spam = 0
			})
		} else 
	if (enable.nospam && m.isGroup && !isAdmin && !status.banned && spam == 30) {
			global.DATABASE._data.users[m.sender].banned = true
			global.DATABASE._data.banned += 1
			return conn.reply(m.chat, `*Over spam!, nomormu telah dimasukkan kedalam banned list.*`, m)
		} if(spam == 5) return conn.reply(m.chat, `❏  *Spam Detector!*\n\n*Tolong @${m.sender.split('@')[0]} untuk tidak spam, colidown 5 detik.*`, null, {contextInfo: { mentionedJid: [m.sender] }})
	}
	
			
	// ANTI-SPAM COMMAND

	//ANTILINK
	if(enable.nolink && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
		if (!m.fromMe && m.text.match(/(https:\/\/chat.whatsapp.com)/gi)) {
            conn.updatePresence(m.chat, Presence.composing) 
			 conn.reply(m.chat, `*Sorry, you got kicked, for sending the group link!!!*`, m).then(() => {
			conn.groupRemove(m.chat, [m.sender])
			 })
        }
     }
	if(enable.nolinkyt && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
		if (!m.fromMe && m.text.match(/(https:\/\/youtu.be)/gi)) {
            conn.updatePresence(m.chat, Presence.composing) 
			 conn.reply(m.chat, `*Sorry, you got kicked, for sending the youtube link!!!*`, m).then(() => {
			conn.groupRemove(m.chat, [m.sender])
			 })
        }
     }
	if(enable.nolinktiktok && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
		if (!m.fromMe && m.text.match(/(https:\/\/vt.tiktok.com)/gi)) {
            conn.updatePresence(m.chat, Presence.composing) 
			 conn.reply(m.chat, `*Sorry, you got kicked, for sending the tiktok link!!!*`, m).then(() => {
			conn.groupRemove(m.chat, [m.sender])
			 })
        }
     }
     if(enable.nohoax && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
         if(m.text.match(/(kirim ke 4 grup|kirim ke 5 grup|maka namamu akan muncul|njir nama gw muncul|jika sudah kirim ke grupmu|lalu kirim ke grupmu|maka otomatis akan muncul|jika sudah cari gambar|namamu akan muncul)/gi)) {
         conn.updatePresence(m.chat, Presence.composing)
         conn.reply(m.chat, `Sorry karna kamu telah ngirim pesan gak guna gitu kamu otomatis di kick!!!`, m).then(() => {
         conn.groupRemove(m.chat, [m.sender])
         })
       }
     }
     if(enable.nokuotafree && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
       if(m.text.match(/(kuotagratis.on|kuotabelajar.on|Program kuota belajar|=75G|Bantuan pulsa|kolah.on|kuotagratis.co|v=75GB|kuotafree.on|lajar.on|kuotakemendikbud.)/gi)) {
       conn.updatePresence(m.chat, Presence.composing)
       conn.reply(m.chat, `*_Yang share kuota gratis jangan di temenin, kick aja langsung!!!_*`, m).then(() => {
       conn.groupRemove(m.chat, [m.sender])
        })
      }
    }
     if(enable.nowan && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
       if(m.text.match(/(Wan|wanz)/gi)) {
       conn.updatePresence(m.chat, Presence.composing)
       conn.reply(m.chat, `*_Yang nge-Fans sama wan jangan di temenin, kick aja langsung!!!_*`, m).then(() => {
       conn.groupRemove(m.chat, [m.sender])
        })
      }
    }
    
	if(enable.noemotebatu && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(emote batu|🗿)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Hamdeh Sorry Kawand!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTIEMOTEBATU DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan menggunakan emote batu atau menggunakan kalimat (emote batu) sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	if(enable.nojakarta && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(Lu|lu|gw|Gw|Gue|Gua|gue|gua)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Hamdeh Sorry Kawand!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTI-JAKARTA DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan menggunakan bahasa Jakarta atau menggunakan kalimat lu/gw sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	if(enable.nosad && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(🙂|😭|🙃)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 4) {
				conn.reply(m.chat, `*Hamdeh Sorry Kawand!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ ANTI-SAD DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 5 ]*\n\n*Jangan kirim emoji sad sebanyak 5x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	if(enable.nobadword && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	if (!m.fromMe && m.text.match(/(asadebangsat|Dakjal|anak setan|ngntd|ngentot|jancuk|kuntul|babi|kampang|kenthu|tempik|kimak|patek|kondom|bugil|seks|sex|sexy|jancok|jembut|bokep|xnxx|xxx|xvideos|xvid|jilboob|seksi|Anjing|Babi|Kunyuk|Bajingan|Bangsat|Kampret|Kontol|Memek|Ngentot|Pentil|Perek|Pepek|Pecun|Bencong|Banci|Maho|Sinting|Lonte|Hencet|Taptei|Kampang|Keparat|Bejad|Gembel|Brengsek|Taek|Anjrit|Fuck|Tetek|Ngulum|Anj|ajg|asu|aswJembut|Totong|Kolop|Pukimak|Bodat|Heang|Jancuk|Burit|Titit|Nenen|Bejat|Silit|Sempak|Fucking|Asshole|Bitch|Penis|Vagina|Klitoris|Kelentit|Borjong|Dancuk|Pantek|kondom|Teho|Bejat|Pantat|Bagudung|Babami|Kanciang|Bungul|Idiot|Kimak|Henceut|Kacuk|pukimak|Pussy|ngewe|Dick|Damn|Assu|tempek|celeng|shit|jingan|ngentot anjing ngewe|Dont use unlisted command,BAKA!breast|kontol|ngentod|colmek|alat vital|bangkinang|tits|tetek|coli|ngocok peli|ANJING!!!|kntl|ngtd|anying|amjin|sikontol|bang bros|ngocok|toket|A n j i n g|Tahi|anjass|biadap|bbii|biadab|Tomlol|dongo|dungu|anjk|bcot|BURUNG KECIL JAN SOK KERAS:V|nude|p3n1s|p3nis)/gi)) {
		conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Over badword!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ BADWORD DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan berkata kasar atau menggunakan kalimat sampah sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}

	if(enable.novirtex && !m.fromMe && m.isGroup && !isOwner && isBotAdmin) {
            if (!m.fromMe && m.text.match(/(৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื)/gi)) {
            	conn.updatePresence(m.chat, Presence.composing) 
            	conn.reply(m.chat, `*Jangan kirim pirtek asu!!!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender]) 	
			})
        }
	}
	
		
	if(enable.nohentai && !m.fromMe && m.isGroup && isBotAdmin) {
            if (m.text.match(/(https:\/\/nhentai.net\/\/g|nhentai.net\/\/g)/gi)) {
            	conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Bad request!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ HENTAI DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan Kirim kode hentai sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
	if(enable.nobomchat && !m.fromMe && m.isGroup && isBotAdmin) {
            if (m.text.match(/(Selamat datang di papan klip, kapan pun Anda menyalin akan disimpan di sini|Selamat datang di papan klip, kapan pun Anda menyalin akan disimpan di siniSelamat datang di papan klip, kapan pun Anda menyalin akan disimpan di siniGeser klip untuk menghapusnya)/gi)) {
            	conn.updatePresence(m.chat, Presence.composing) 
		var cBad = global.DATABASE.data.users[m.sender].warning += 1
		var warning = global.DATABASE.data.users[m.sender].warning
			if(warning > 9) {
				conn.reply(m.chat, `*Over Bomchat!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				global.DATABASE.data.users[m.sender].warning = 0
           	 })
			} else {
				conn.reply(m.chat, `*⺀ BOMCHAT DETECTOR ⺀*\n\n*Kamu mendapat peringatan : [ ${warning} / 10 ]*\n\n*Jangan Bomchat sebanyak 10x atau kamu akan dikeluarkan dari grup secara otomatis.*\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║`, m)
			}
		}
	}
	
if (!m.fromMe && m.text.match(/(terimakasih|makasih|tq|thanks|tengs|tengkyu|mks|mksih)/gi)) {
	    conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/makasih.opus', 'tts.opus', null, m, true)
	}
	
if (!m.fromMe && m.text.match(/(desah|mendesah|yamete)/gi)) {
	    conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/desah.opus', 'tts.opus', null, m, true)
	}
	
if (!m.fromMe && m.text.match(/(asalamualaikum|assalamu'alaikum|assalamualaikum)/gi)) {
	    conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/wall.opus', 'tts.opus', null, m, true)
	}
		