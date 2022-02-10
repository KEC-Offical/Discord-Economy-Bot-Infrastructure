const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
	message.delete({ timeout: 5000 })
    if(message.channel.id !== "920340734098440213") return message.reply('💠 **Hata!**\n\n➡️ Bu komutu yalnızca <#920340734098440213> kanalında kullanabilirsin..').then(message => { message.delete({ timeout: 8000 })})
   if (message.guild.channels.cache.get(db.fetch(`destek_${message.author.id}`))) return false || message.channel.send('💠 **Hata!**\n\n➡️ Şu anda hala aktif olan bir destek talebin var.').then(message => { message.delete({ timeout: 8000 })})
      
    let user = message.author
    let yetkili = message.guild.roles.cache.find(x => x.id == "898520520998387762")
    let herkes = message.guild.roles.cache.find(x => x.name == "@everyone")
    message.guild.channels.create(`destek-${message.author.username}`, "text").then(async c => {
        db.set(`destek_${message.author.id}`, c.id)
        const category = message.guild.channels.cache.get('920340679530524783')
        c.setParent(category.id)
        c.send(`${user}`).then(message => { message.delete({ timeout: 1000 })})
        c.send(":white_check_mark: **Başarılı!**\n\n:wave: Merhaba! KEC™ | YouTube® - Destek Sistem'ine bir destek talebin düştü..\n\n🔸 Destek talebini açarak <#920340734098440213> kanalında yazan kuralları kabul etmiş olursun. Ahh.. Neredeyse unutuyordum! Birazdan <@&898520520998387762>'lerimiz seninle ilgilenecektir.\n\n🔸 Destek talebini kapatmak için ``KEC!destek-kapat`` komutunu kullanman yeterli!")
        c.overwritePermissions([
            {
                id: user,
                allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            },
            {
                id: yetkili.id,
                allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            },
            {
                id: herkes.id,
                deny: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            },
        ]);
})



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destek'
};