const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'alert') {
    	message.reply('test');
  	}
});
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
 channel.send(` **[New]** ${member} Welcome to ROBLOX OFFICIAL Discord server!`);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
