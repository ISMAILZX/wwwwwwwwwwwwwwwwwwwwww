let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXis XL [083805279906]
│ • Indosat [0857xxxxxxxx]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ds|donasi$/i

module.exports = handler
