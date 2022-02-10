const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  let user = message.mentions.members.first() || message.author;
  let bal = db.fetch(`money_${message.guild.id}_${user.id}`);
  if (bal === null) bal = 0;
    let kec = "``"
    let kecyoutube = "PARA BİRİMİ"
 message.channel.send(`:scroll: **Ekonomi**\n\n💠 **Cüzdan**\n\n:small_orange_diamond: Cüzdanında tam olarak **__${bal}__** ${kecyoutube} Coin var..\n\n💠 **KEC Coine Mi İhtiyacın Var?**\n\n:arrow_right: ${kec}KEC!günlük${kec} Komutuyla günlük KEC Coinini alabilir..\n\n:arrow_right: ${kec}KEC!haftalık${kec} Komutuyla haftalık KEC Coinini alabilir..\n\n:arrow_right: ${kec}KEC!çalış${kec} Komutuyla çalışarak KEC Coin kazanabilirsin..`);
};

module.exports.help = {
  name: "cüzdan"
};