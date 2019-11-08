module.exports = {
	name: 'spray',
	description: 'spray!',
	execute(message, args, taggedUser) {
		return `${message.author.username} douses ${taggedUser.username} with a spray bottle! *Bad, Bad!* `;
		},
	exception(message, args, taggedUser) {
		return `You douse yourself with a spray bottle. *Ah, refreshing!* `;
	}
};