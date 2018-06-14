const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", () => {
    client.user.setActivity('[RO] by hypixej');
    // Will show "Playing (Message Here)"
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Well Hello there! I have been created by hypixej.');
  	}
});

client.on("message", (message) => {
  if(message.content === "alert") {
    message.channel.send("**[BOT UPDATE]** \nAll the bot updates will be made by the bot now! ( @here )");

  }
});
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
 channel.send(` **[New]** ${member} Welcome to ROBLOX OFFICIAL Discord server!`);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
