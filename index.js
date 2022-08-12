const { Client, Intents, Collection } = require('discord.js');
const { token, clientId } = require('./config.json');
const fs = require('node:fs')
const path = require('node:path')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity("Beep booping");
	client.channels.cache.get('960431284742668300').send("Who's ready for some BACON?!?")
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute({interaction, client});
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('messageCreate', message =>{
    if (message.content=="It is known" && message.author.id!=clientId){
        message.reply('It is known')
    }
})

client.login(token);