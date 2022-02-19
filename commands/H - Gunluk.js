const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  let timeout = 86400000;
  let kecyoutube2 = "COİN BİRİMİ"
  let amount = 1000;
  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let t = ms(timeout - (Date.now() - daily));
    message.channel.send(`:scroll: **Ekonomi**\n\n📟 **Olamaz!**\n\n:arrow_right: Maalesef bugünki günlük ${kecyoutube2} Coinini almışsın. Lütfen ${t.hours} saat ${t.minutes} dakika ${t.seconds} saniye sonra tekrar günlük ${kecyoutube2} Coinini almayı dene..`);
  } else {
    message.channel.send(`:scroll: **Ekonomi**\n\n:tada: **Tebrikler!**\n\n:arrow_right: Günlük ${kecyoutube2} Coinin olan ${amount} ${kecyoutube2} Coin cüzdanına eklendi..`);
    db.add(`money_${message.guild.id}_${user.id}`, amount);
    db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
  }
};

module.exports.help = {
  name: "günlük"
};
