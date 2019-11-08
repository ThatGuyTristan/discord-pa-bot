module.exports = {
	name: 'pillow',
	description: 'pillow!',
	execute(message, args, taggedUser) {
		return `*${message.author.username} hits ${taggedUser.username} in the face with a pillow!* `;
		},
	exception(message, args, taggedUser) {
		return `*You whack yourself with a pillow. Feeling okay?* `;
	}
};