const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'alert') {
    	message.reply('**[BOT UPDATE]**');
        message.reply('Welcome everone, I am your new bot and I will try to make this server the best roblox discord sever ever!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
