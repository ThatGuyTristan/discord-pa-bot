module.exports = {
	name: 'patpat',
	description: 'patpat',
	execute(message, args, taggedUser) {
		return `*${message.author.username} gives ${taggedUser.username} gentle head patpats.*`;
		},
	exception(message, args, taggedUser) {
		return `You give yourself head patpats. *and ruin your hair*`;
	}	
};