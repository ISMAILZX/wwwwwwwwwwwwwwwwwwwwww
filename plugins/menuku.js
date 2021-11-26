let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'Menu', description: "nya mana bang", rowId:"/hah"},
        {title: 'owner', description: "si owner", rowId:"/qw"},
        {title: 'tag all', description: "buat kesel orang lain", rowId:"/qe"}
    ]
    
    const sections = [{title: "Section 1", rows: rows}]
    const button = {
        buttonText: 'Click Me!',
        description: "Hello it's list message",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['menuku','gabut'] 
handler.tags = ['main']
handler.command = /^menuku$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
