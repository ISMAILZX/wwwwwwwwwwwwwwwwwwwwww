let handler = async m => m.reply(`
╭─「 BUY KODE RANDOM 」
│ 
│ > Keterangan :
│• Fitur Kode Random adalah fitur kode yang berisi
│hadiah! Anda bisa mendapatkan Uang
│sepuasnya! Hingga masa berlaku kode randomnya habis!
│
│ > Harga :
│• 5K / Minggu (7 Hari)
│  > NOTE: Jika Tidak Mau Membeli, 
│Anda Dapat Mendapatkannya Dengan Chat
│Di wa.me/6285795431803?text=Bang+mau+dapet+kode+random+free
│
│
│ > Pembayaran :
│• Pulsa (INDOSAT) :
│+6285795431803
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['belikode']
handler.tags = ['hadiah']
handler.command = /^(belikode)$/i

module.exports = handler
