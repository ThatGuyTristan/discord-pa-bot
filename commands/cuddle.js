module.exports = {
	name: 'cuddle',
	description: 'cuddle',
	execute(message, args, taggedUser) {
		return `${message.author.username} cuddles ${taggedUser.username}! `;
		},
	exception(message, args, taggedUser) {
		return `You hold yourself. *Everything's gonna be okay* `;
	}	
};