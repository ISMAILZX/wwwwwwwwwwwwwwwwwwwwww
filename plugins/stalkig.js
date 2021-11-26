const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Example:\n${usedPrefix + command} Ismail_Kurama`

  let res = await fetch(global.API('xteam', '/stalk/ig', { username: args[0] }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profile_url, 'eror.jpg', `*Name:* ${json.data.full_name}\n*Bio:* ${json.data.biography}\n*Followers:* ${json.data.followers}\n*Following:* ${json.data.following}\n*Posts:* ${json.data.posts_count}\n*Private:* ${json.data.is_private}\n*Verified:* ${json.data.is_verified}\n\nhttps://www.instagram.com/Ismail_Kurama/`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.help = ['ig <username>']
handler.tags = ['internet']
handler.command = /^(ig)$/i
handler.limit = true
module.exports = handler
