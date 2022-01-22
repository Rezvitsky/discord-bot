const { Client, Intents } = require('discord.js')

// import TOKEN from the .env file
require('dotenv').config()
const TOKEN = process.env.TOKEN

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on('ready', () => {
    console.log(`Logged is as ${ client.user.tag }`)
})

client.on('message', (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX)) return

    const args = msg.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'hi') {
        msg.reply('hello')
    }

})

client.login(TOKEN)