let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│
│
│
│ > Harga :
│• 5K / (1 bulan) /Join Grup tapi ndak bisa akses fitur premium
│• 5K / (1 Minggu) / hanya premium, tapi ndak bisa di masukan ke grup
│• 15K / Bulan akses premium no join grup 
│• 20K / Bulan (4 Minggu) + join 1 Grup
│• 35K / Bulan (2 Bulan) + join 1 grup
│• 40K / VIP (4 bulan) + join 1 grup
│
│ > Pembayaran :
│• https://saweria.co/nightsleep1
│• pulsa(Tsel)+ Up 5K : 0823-3103-3919 
│• dana : 0823-3103-3919
│○Note: Harap chat dulu ke 
│ https://wa.me/6282331033919
│sebelum order premium.
│
│
│ *Utamakan Dana atau pulsa(Tsel)*
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^remium$/i

module.exports = handler
