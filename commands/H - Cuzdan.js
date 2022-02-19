const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  let user = message.mentions.members.first() || message.author;
  let bal = db.fetch(`money_${message.guild.id}_${user.id}`);
  if (bal === null) bal = 0;
    let kec = "``"
    let kec1 = "PREFİX"
    let kecyoutube = "COİN BİRİMİ"
 message.channel.send(`:scroll: **Ekonomi**\n\n💠 **Cüzdan**\n\n:small_orange_diamond: Cüzdanında tam olarak **__${bal}__** ${kecyoutube} Coin var..\n\n💠 **${kecyoutube} Coine Mi İhtiyacın Var?**\n\n:arrow_right: ${kec}${kec1}günlük${kec} Komutuyla günlük ${kecyoutube} Coinini alabilir..\n\n:arrow_right: ${kec}${kec1}haftalık${kec} Komutuyla haftalık ${kecyoutube} Coinini alabilir..\n\n:arrow_right: ${kec}${kec1}çalış${kec} Komutuyla çalışarak ${kecyoutube} Coin kazanabilirsin..`);
};

module.exports.help = {
  name: "cüzdan"
};
