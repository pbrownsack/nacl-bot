const Discord = require("discord.js")
const keys = require("./keys")
const NACL = require("./nacl")
const axios = require("axios")

const client = new Discord.Client()

client.on("ready", () => {
    NACL.Log("Logged in as " + client.user.tag)
})

client.on("message", msg => {
    if (msg.content.startsWith("!ping")) {
        msg.reply("pong!")
    } else if (msg.content.startsWith("!me")) {
        const embed = new Discord.RichEmbed()
        embed.setTitle(msg.author.tag)
        embed.setColor(0xFF0000)
        embed.setDescription("The coooolest of the cool.")

        msg.channel.send(embed)
    }
})

client.login(keys.botToken)
