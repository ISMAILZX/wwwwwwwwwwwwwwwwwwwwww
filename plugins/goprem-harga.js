let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
5k / 1 Minggu
10k / 1 Bulan
20k / Permanen
Pengen Gratis
Subscribe Channel
Owner Kirim
Bukti SS
Ini link nya
https://youtube.com/c/ismailkurama`.trim()

conn.sendButton(m.chat, prem.trim(), '© Ismail Kurama', 'Gas chat owner', '.owner', { sendEphemeral: true, quoted: m })}

handler.command = /^(piro|pelit)$/i

module.exports = handler
