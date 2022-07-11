const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();


const bot = new Discord.Client({ intents: 513 });

bot.once('ready', () => {
    console.log("okokok");
    console.log(Discord.Channel.toString());
    
})



bot.login(process.env.BOT_TOKEN);