const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


client.on('message', (message) =>{
  if(message.author.username =='gabrielomn')
    console.log(message)
    message.react('💩')
})

client.login('OTU2MzM0MjEwMjc5NDQwNTI1.Yjutow.ZGfmOlnt0QBy9jIhEh1H5Cw3krk')

