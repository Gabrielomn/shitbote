require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const reacoes = [
  [
    '🇴',
    '🇹',
    '🇦',
    '🇷',
    '🇮',
    '🅾️'
  ],
  [
    '🇲',
    '🇪',
    '🇷',
    '🇩',
    '🇦',
  ],
  [
    '🇱',
    '🇮',
    '🇽',
    '🇴',
  ],
  ['💩'],
  [
    '🇪',
    '🇸',
    '🇨',
    '🇷',
    '🇴',
    '🇹',
    '🅾️'
  ],
  [
    '🇫',
    '🇩',
    '🇵'
  ],
  [
    '🅰️',
    '🇧',
    '🇴',
    '🇷',
    '🇹',
    '🇦',
    '🇩',
    '🅾️'
  ],
  [
    '🇨',
    '🇷',
    '🇮',
    '🇳',
    '🇬',
    '🇪'
  ],
  [
    '🇳',
    '🅰️',
    '🇿',
    '🇮',
    '🇵',
    '🇦',
    '🇷',
    '🇩',
    '🅾️'
  ]
]

qtdReacoes = reacoes.length

getRandomReacao = () => {
  index = Math.floor(Math.random() * qtdReacoes)
  return reacoes[index]
}

client.on('message', (message) =>{
  if(message.author.username == process.env.TARGET){
    
    const reacao = getRandomReacao()
    let toLog = `
      Message from ${message.author.username} - id: ${message.author.id}
      Time sent: ${message.createdAt}
      Message content: ${message.content}
      Reacting with: ${reacao.join(' ')}
    `
    console.log(toLog)
    let cont = 0
    reacao.forEach((emoji) => {
      setTimeout(() => {
        message.react(emoji)

      }, cont * 10)
      cont++
    })
  }

})

client.login(process.env.DISCORD_TOKEN)

