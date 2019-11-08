module.exports = {
	name: 'bite',
	description: 'bite!',
	execute(message, args, taggedUser) {
		return`${message.author.username} bites ${taggedUser.username}! *om nom nom*`;
		},
	exception(message, args, taggedUser) {
		return `You bite yourself. *Ow ow ow*`;
	}
};