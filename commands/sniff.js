module.exports = {
	name: 'sniff',
	description: 'sniff',
	execute(message, args, taggedUser) {
		return `${message.author.username} sniffs ${taggedUser.username}! *sniff...sniff...sniiiiiiiiiiiiiiiiff* `;
		},
	exception(message, args, taggedUser) {
		return`You sniff yourself. *You should shower more...* `;
	}	
};