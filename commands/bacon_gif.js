const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const { Channel } = require('discord.js');
const { giphy_api } = require('../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('givemethebacon')
        .setDescription('Give me the Bacon!'),

    async execute({interaction}) {
        url = "Whoops :( I couldn't get Bacon"
        rnd = Math.floor(Math.random()*50)
        axios({
            method: 'get',
            url: `https://api.giphy.com/v1/gifs/search?api_key=${giphy_api}&q=bacon&limit=1&offset=${rnd}&rating=g&lang=en`,
        })
            .then(
                (response) => {
                    url = response.data.data[0].url
                    interaction.reply(`${url}`)
                        .then(
                            () => {
                                interaction.followUp('Did somebody say... BACON?')
                            }
                        )

                }
            )



    },
};

// Container-sc-1ekfdyy kbwfLS