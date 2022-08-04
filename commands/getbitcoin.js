const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getbitcoin')
		.setDescription('Bitcoin price query goes brrrr'),
        
	async execute({interaction}) {

        response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')

        await interaction.reply(`Bitcoin price is currently at ${response.data.market_data.current_price.usd} dollers!`);

	},
};