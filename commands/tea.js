module.exports = {
	name: 'tea',
	description: 'tea',
	execute(message, args, taggedUser) {
		return `${message.author.username} gives ${taggedUser.username} a nice, warm cup of tea. <:tea:641434066184568852> `;
		},
	exception(message, args, taggedUser) {
		return `${message.author.username} sips on a warm cup of tea.`;
	}	
};