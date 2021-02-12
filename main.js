//connection du bot:
const fs = require('fs');
const config = require("./config.js")
const Discord = require('discord.js');
const { prefix, token } = require('./config.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    
	client.commands.set(command.name, command);
}


//Au demarage:

client.login(process.env.TOKEN)
client.on('ready', function (){

    console.log(config.MsgConsole)

    client.user.setActivity(config.activity , {type : 'WATCHING'})
    client.user.setStatus('dnd');
    
    
})
 
//Les commandes
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		 client.commands.get('ping').execute(message, args); 
	    	} 
    if (command === 'reload') {
       client.commands.get('reload').execute(message, args); 
   } 
	if (command === 'join') {
	    client.commands.get('join').execute(message, args);
	}
	if (command === 'leave') {
	    client.commands.get('leave').execute(message, args);
	}
	if (command === '') {
	    client.commands.get('embed').execute(message, args);
	}
    if(command === 'help') {
        client.commands.get('help').execute(message, args); 
    } 


message.delete()
}) 
  

//Commande Embed
client.on('message', message => {
    switch(message.content) {
        case '.reload':
            resetBot(message.channel);
            break;

        // ... other commands
    }
});

// Turn bot off (destroy), then turn it back on
