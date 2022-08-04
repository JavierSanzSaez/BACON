![BACON version 1.0](https://img.shields.io/badge/Bacon-1.0-red)

# BACON - A Beep Boop Beep for DeFi :bacon:
BACON is a Discord Bot designed to fulfill all my needs regarding Crypto and DeFi. This is mainly a project for fun, while at the same time it helps me keep an eye on Defi stats, such as coin prices.

(No, it has nothing to do with the abominable functional transformation [baconjs](https://baconjs.github.io/))

# Installation
This project is based on the JS discord.js module, so you will need the basics:

```bash
sudo apt-get install nodejs npm
```
Fortunately all my dependencies are stored in [the package.json file](package.json), so you can easily install them:

```bash
npm install
```

# Usage
In order to run this bot, you will need a package.json file with the following configuration (Please refer to the [Discord documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) in order to set up your bot):

```json
{
    "token": "Private Bot token",
    "guildId": "",
    "clientId": ""
}

```

With this in the directory, just execute this command:

```bash
npm start
```

The bot commands are stored in the commands folder. Once you add new commands, you can easily register them with the following command:

```bash
npm run register

```

If you are a die-hard fan of whales, so can also run the dockerized application

```bash
docker build -t bacon .
docker run bacon
```

# Suggestions? More ideas with bacon?
Feel free to contact me or drop an issue if you come up with anything else you can do with bacon! :D
