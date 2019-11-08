module.exports = {
	name: 'water',
	description: 'water!',
	execute(message, args, taggedUser) {
		return `${message.author.username} dumps a bucket of icy water on ${taggedUser.username}. `;
		},
	exception(message, args, taggedUser) {
		return`You dump a bucket of icy water on yourself. ***chilly*** `;
	}
};