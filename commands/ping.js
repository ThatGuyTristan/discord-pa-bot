module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		return 'Pong. ';
		},
	exception(message, args, taggedUser) {
		return `PONG, BITCH. *OwO my ass* `;
	}	
};