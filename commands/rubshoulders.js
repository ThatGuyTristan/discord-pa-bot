module.exports = {
	name: 'rubshoulders',
	description: 'rubshoulders',
	execute(message, args, taggedUser) {
		return `${message.author.username} rubs ${taggedUser.username}'s shoulders.`;
		},
	exception(message, args, taggedUser) {
		return `${message.author.username} rubs their shoulders.`;
	}	
};