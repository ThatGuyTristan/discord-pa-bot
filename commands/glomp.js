module.exports = {
	name: 'glomp',
	description: 'glomp!',
	execute(message, args, taggedUser) {
		return `${message.author.username} jumps into the air and glomps ${taggedUser.username}. `;
		},
	exception(message, args, taggedUser) {
		return`*...you can't glomp yourself...*** `;
	}
};