module.exports = {
	name: 'nuzzle',
	description: 'nuzzle',
	execute(message, args, taggedUser) {
		return `${message.author.username} nuzzles ${taggedUser.username} gently. `;
		},
	exception(message, args, taggedUser) {
		return `You nuzzle yourself. *I'm done asking how...* `;
	}	
};