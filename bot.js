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
  const channel = member.guild.channels.find('name', 'welcome log');
  if (!channel) return;
 channel.send(`Welcome to the server, ${member}`);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
