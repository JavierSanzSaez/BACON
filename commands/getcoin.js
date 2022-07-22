const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getcoin')
		.setDescription('Any Coin price query goes brrrr')
		.addStringOption(
			option =>
				option.setName('coin')
				.setDescription('The coin to query')
				.setRequired(true)
		),
        
	async execute(interaction) {
        response = await axios.get(`https://api.coingecko.com/api/v3/coins/${interaction.options.getString('coin')}`)

        await interaction.reply(`${response.data.name} price is currently at ${response.data.market_data.current_price.usd} dollers!`);

	},
};