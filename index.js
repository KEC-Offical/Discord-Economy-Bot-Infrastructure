const Discord = require('discord.js');
const client = new Discord.Client();
const FS = require('fs');
const db = require('quick.db');
client.commands = new Discord.Collection();
FS.readdir("./commands/", (e, files) => {

  if(e) console.log(JSON.stringify(e));
  let file = files.filter(f => f.split(".").pop() === "js");
  file.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Komutu yüklendi..`);
    client.commands.set(props.help.name, props);
 });
})

client.on('ready', ()=>console.log('Bot aktif edildi!'));
client.on('message', function(message) {
  if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = 'PREFİX'
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let cmdfile;

    if (client.commands.has(cmd)) {
      cmdfile = client.commands.get(cmd);
      try {
        cmdfile.run(client, message, args)
      } catch (e) {
        console.log(JSON.stringify(e))
      }
    }
})

  

client.login("TOKEN")
