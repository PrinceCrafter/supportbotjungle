const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Codes] ${client.users.size}`)
    client.user.setStatus("idle")
client.user.setStatus("Online")
client.user.setGame(`${prefix}help | ${client.users.size} Users | Jungle Network`, "https://twitch.tv/Testing")
});

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
