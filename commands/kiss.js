module.exports = {
	name: 'kiss',
	description: 'kisses!',
	execute(message, args, taggedUser) {
		return `${message.author.username} kisses ${taggedUser.username}. `;
		},
	exception(message, args, taggedUser) {
		return`You kiss. . . yourself? *No, stop...* `;
	}	
};