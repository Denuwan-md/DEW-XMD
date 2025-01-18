let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender);
  let img = 'https://raw.githubusercontent.com/DJDewmina/DEW-XMD/refs/heads/main/assets/DEW-XMD.jpg';
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  let messageContent = {
    text: '*DEW-MD IS ALIVE NOW*, *හායි ලස්සන ළමයො කොහොමද ඉතින් ඔයාට*😁😽', // Text content in case a message body is needed
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '© DEW-MD',
        body: '© DEW-MD',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029Varwcfc7YSd60AulNF2h',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  // Send the message with the external ad reply
  await conn.sendMessage(m.chat, messageContent, { quoted: con });
};

handler.help = ['alive'];
handler.tags = ['main'];
handler.command = /^(alive)$/i;

export default handler;
