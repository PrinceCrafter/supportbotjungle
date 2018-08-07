const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);


client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
