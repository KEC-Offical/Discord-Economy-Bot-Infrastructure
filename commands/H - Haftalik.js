const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  let timeout = 604800000;
  let amount = 5000;
  let kecyoutube3 = "COİN BİRİMİ"

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
message.channel.send(`:scroll: **Ekonomi**\n\n📟 **Olamaz!**\n\n:arrow_right: Maalesef bu haftaki haftalık ${kecyoutube3} Coinini almışşsın. Lütfen ${time.hours} saat ${time.minutes} dakika ${time.seconds} saniye sonra tekrar haftalık ${kecyoutube3} Coinini almayı dene..`);
  } else {
message.channel.send(`:scroll: **Ekonomi**\n\n:tada: **Tebrikler!**\n\n:arrow_right: Haftalık ${kecyoutube3} Coinin olan ${amount} ${kecyoutube3} Coin cüzdanına eklendi..`);
    db.add(`money_${message.guild.id}_${user.id}`, amount);
    db.set(`weekly_${message.guild.id}_${user.id}`, Date.now());
  }
};

module.exports.help = {
  name: "haftalık",
};
