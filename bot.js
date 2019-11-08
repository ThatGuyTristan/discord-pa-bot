const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const talkedRecently = new Set();

var logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require (`./commands/${file}`);
	client.commands.set(command.name,command)
}

client.once('ready', () => {
	console.log('Ready!');
});

// Do everything else :/
client.on('message', message => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	const taggedUser = message.mentions.users.first();
	
	//MAKING SURE WE HAVE A COMMAND
	if (!client.commands.has(command)) return;
		
	 if (talkedRecently.has(message.author.id)) {
			const warningEmbed = new Discord.RichEmbed()
			.setColor('#9900ff')
			.setDescription("Ya gotta wait 10 seconds, " + message.member.displayName + " there, buddy");
		 
            message.channel.send(warningEmbed);
    } else {

    // CHECKING FOR THE PREFIX AND MAKING SURE WE ARE NOT A BOT :)
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	//TAGGING OURSELVES		
	if (message.author === taggedUser || !taggedUser) {
		const messageEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setDescription(client.commands.get(command).exception(message, args, taggedUser));

		talkedRecently.add(message.author.id);
		setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
						
			
		return message.channel.send(messageEmbed);
	}
		
	//tagging someone else
	try {
		const messageEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setDescription(client.commands.get(command).execute(message, args, taggedUser));
	
		 // Adds the user to the set so that they can't talk for a minute
		talkedRecently.add(message.author.id);
		setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
					
		return message.channel.send(messageEmbed);

		} catch (error) {
		console.error(error);
		message.reply('Command not found! :(');
		}
		
		
       
      
	}
});
			
client.login(token);
			
