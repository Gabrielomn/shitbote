require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

console.log(process.env.DISCORD_TOKEN)
client.on('message', (message) =>{
  if(message.author.username =='gabrielomn')
    console.log(message)
    message.react('💩')
})

client.login(process.env.DISCORD_TOKEN)

