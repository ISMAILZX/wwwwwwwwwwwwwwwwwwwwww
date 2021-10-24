let handler = function (m) {
  conn.sendContact(m.chat, '6285859073145' , 'Pacar multifungsi', m)
  conn.reply(m.chat, `Imtu ndak tau siapa, sev aja`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
