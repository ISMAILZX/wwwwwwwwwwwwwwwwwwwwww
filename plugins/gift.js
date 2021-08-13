let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Randommu!`, m)
    if (args[0] == 'ANDYyYY' || args[0] == '4ndY' || args[0] == 'A4557knJQ1' || args[0] == 'ANDYGANS') {

        conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\nRp.Unlimited,-!\n\nPajak -Rp.50.000,-', m)
    global.DATABASE._data.users[m.sender].exp += 99999999999999999999999999999999999
    } else {
        conn.reply(m.chat, `*KODE RANDOM TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode random yang valid dengan cara ketik !belikode atau dapatkan kode random secara gratis dengan cara menghubungi owner!`, m)
    }
}
handler.help = ['random <kode>']
handler.tags = ['hadiah']
handler.command = /^(random)$/i
handler.premium = false

handler.limit = false

module.exports = handler
