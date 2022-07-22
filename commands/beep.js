const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Beep Boop! Boop Beep?'),
	async execute(interaction) {
		await interaction.reply('Boop!');
	},
};