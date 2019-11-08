module.exports = {
	name: 'hug',
	description: 'Hug!',
	execute(message, args, taggedUser) {
		return `${message.author.username} hugs ${taggedUser.username}.`;
		},
	exception(message, args, taggedUser) {
		return `You hug yourself. *You're gonna be okay*`;
	}	
};