const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDMxOTk0NjA2MDQxOTU2MzUy.DdKWyQ.0ZRSAX192CY8g75evs2AM0nMGPw);
