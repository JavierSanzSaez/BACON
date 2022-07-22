const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('trackprice')
		.setDescription('Change current text channel name to match the tracking coin price queried')
        .addStringOption(
			option =>
				option.setName('coin')
				.setDescription('The coin to query')
				.setRequired(true)
		),
	async execute(interaction) {
        await interaction.reply('Tracking price...');
        channel = await interaction.channel

        function checkPrice(){
            axios.get(`https://api.coingecko.com/api/v3/coins/${interaction.options.getString('coin')}`)
            .then(
                (response)=>{
                    console.log(`Updating channel ${channel.name} with "${response.data.name}: ${response.data.market_data.current_price.usd}\$"`)
                    channel.setName(`${response.data.symbol}: ${response.data.market_data.current_price.usd}\$`)
                }
            )
            .catch((error)=>{
                console.log("Error while tracking prices: "+ error)
                return
            }

            )
        }
        setInterval(() => checkPrice(), 10000)

	},
};