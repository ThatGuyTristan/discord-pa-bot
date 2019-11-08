module.exports = {
	name: 'tuck',
	description: 'tuck!',
	execute(message, args, taggedUser) {
		return `${message.author.username} tucks ${taggedUser.username} into bed. *So cozy...* `;
		},
	exception(message, args, taggedUser) {
		return `You tuck yourself in for the night. *So cozy...* `;
	}
};