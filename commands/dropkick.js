module.exports = {
	name: 'dropkick',
	description: 'dropkick!',
	execute(message, args, taggedUser){
		return `${message.author.username} hits ${taggedUser.username} with a running dropkick!`;	
	},
	exception(message,args,taggedUser){
		return `No, ${message.author.username} You can't dropkick yourself. Just stop it. Get some help.`;
	}
}
