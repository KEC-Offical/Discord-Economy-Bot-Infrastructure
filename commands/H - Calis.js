const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  let kecyoutube1 = "COİN BİRİMİ"
  let timeout = 3600000;
  let amount = 500;
  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let t = ms(timeout - (Date.now() - daily));
    message.channel.send(`:scroll: **Ekonomi**\n\n📟 **Olamaz!**\n\n:arrow_right: Fazlasıyla çalışmışsın. Lütfen ${t.hours} saat ${t.minutes} dakika ${t.seconds} saniye sonra tekrar çalışmayı dene..`);
  } else {
    message.channel.send(`:scroll: **Ekonomi**\n\n:tada: **Tebrikler!**\n\n:arrow_right: İşinde çalıştın ve ${amount} ${kecyoutube1} Coin cüzdanına maaş olarak eklendi..`);
    db.add(`money_${message.guild.id}_${user.id}`, amount);
    db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
  }
};

module.exports.help = {
  name: "çalış"
};
