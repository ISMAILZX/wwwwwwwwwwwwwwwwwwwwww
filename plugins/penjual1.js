let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6283805279906', 'Ismail Kurama', m)
  m.reply('wa.me/6283805279906')
}

handler.command = /^pj1$/i

module.exports = handler
