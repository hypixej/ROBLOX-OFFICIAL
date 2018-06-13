const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'r') {
    	message.reply('test');
  	}
});

client.on("message", (message) => {
  if(message.content === "alert") {
    message.channel.send("**[BOT UPDATE]**");
    message.channel.send("All the bot updates will be made by the bot now! ( @here )");
  }
});
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
 channel.send(` **[New]** ${member} Welcome to ROBLOX OFFICIAL Discord server!`);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
