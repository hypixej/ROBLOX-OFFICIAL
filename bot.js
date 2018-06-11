const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'alert') {
    	message.reply('**[BOT UPDATE]** - I am your new bot!');
  	}
client.on('guildMemberAdd', user => {
client.channels.get('454425518981513238').send('Welcome to my server, ' + user + '!')
}
          
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
