var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "economy",
    description: "",
    usage: "1) m/economy [module name]\n2) m/feconomy[command (name or alias)]",
    example: "1) m/ec\n2) m/fn\n3) m/ec",
    aliases: ['ec']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}economy`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("⚒️ - economy commands")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/853140080276144138.gif?v=1")

    .setDescription (`My Prefix In This Server is <a:Fleha:878251523761659914> \`${prefix}\``)
    
   .addField(`ㅤ`, `
> <:economye:899658979217641492> addmoney
> <:economye:899658979217641492> removemoney
> <:economye:899658979217641492> balance
> <:economye:899658979217641492> beg
> <:economye:899658979217641492> buy
> <:economye:899658979217641492> daily
> <:economye:899658979217641492> weekly
> <:economye:899658979217641492> deposit
> <:economye:899658979217641492> leaderboard
> <:economye:899658979217641492> give
> <:economye:899658979217641492> profile
> <:economye:899658979217641492> rob
> <:economye:899658979217641492> roulette
> <:economye:899658979217641492> sell
> <:economye:899658979217641492> setbackground
> <:economye:899658979217641492> setinfo
> <:economye:899658979217641492> slots
> <:economye:899658979217641492> shop
> <:economye:899658979217641492> withdraw
> <:economye:899658979217641492> work`)

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}