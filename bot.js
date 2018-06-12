const Discord = require('discord.js');
const client = new Discord.Client();

bot.user.setActivity('ROBLOX OFFICIAL');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'alert') {
    	message.reply('test');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
