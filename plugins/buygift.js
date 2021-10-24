let handler = async m => m.reply(`
╭─「 P R E M I U M 」
│ 
│ > Keterangan :
│• Fitur Prem adalah Fitur vip yg dapat di akses
│anda! anda bisa mendownload ytmp3-ytmp4-play dll
│sepuasnya! Hingga masa berlaku premium habis!
│
│ > Harga :
│• 5K / Minggu (7 Hari)
│• 15K / Bulan (4 Minggu)
│• 30K / VIP (Permanen)
│
│ > Pembayaran :
│• Pulsa (INDOSAT) :
│  +625795431803
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['goprem']
handler.tags = ['premium']
handler.command = /^(goprem)$/i

module.exports = handler
