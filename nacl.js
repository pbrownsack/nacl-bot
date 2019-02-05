const dateTime = require("date-and-time")
const axios = require("axios")

const NACL = {}

NACL.Log = (str) => {
    let now = new Date()
    let timeStr = dateTime.format(now, "hh:mm:ss")
    console.log("[" + timeStr + "] " + str)
}

NACL.GetUser = () => {
    
}

module.exports = NACL