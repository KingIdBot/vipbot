let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Dibuat dengan bahasa javascript via NodeJs

➥ Github: https://github.com/KingIdBot/vipbot
➥ Instagram: [ TIDAK TERSEDIA]
➥ YouTube: KING•ID

〘 Thanks To 〙 
➥ Allah SWT

〘 DONASI 〙 
➥ pulsa : [ TIDAK TERSEDIA ]
➥ dana: [ TIDAK TERSEDIA ]
➥ ovo: [ TIDAK TERSEDIA ]


〘 BOT VIP 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

