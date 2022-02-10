const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.author.send("**💠 Hata!**");
  let user = message.mentions.members.first() || message.author;

  if (isNaN(parseInt(args[1]))) return message.channel.send("**💠 Hata!**");
  db.add(`money_${message.guild.id}_${user.id}`, args[1]);
  let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);

  message.channel.send(`:scroll: **Ekonomi**\n\n:white_check_mark: **İşlem Başarılı!**`);
};

module.exports.help = {
  name: "para-ekle"
};
