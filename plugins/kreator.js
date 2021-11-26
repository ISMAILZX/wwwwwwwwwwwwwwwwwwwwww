function handler(m) {
  this.sendContact(m.chat, '6283805279906', 'Ismail Kurama', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
