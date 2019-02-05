const Discord = require("discord.js")
const client = new Discord.Client()
const keys = require("./keys")

client.on("ready", () => {
    console.log("Logged in as " + client.user.tag)
})

client.on("message", msg => {
    if (msg.content.startsWith("!ping")) {
        msg.reply("pong!")
    }
})

client.login(keys.botToken)
