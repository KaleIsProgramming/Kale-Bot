const Discord = require("discord.js");
require("dotenv").config();
const TOKEN = "OTI5Njk5MDIzMjc3OTIwMjU2.YdrHsA.q6ZzCUbCaCJFVq8zwvGxSgXCf3s";
const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    const helloWords = ["nigger", "fuck","white"];
    helloWords.forEach(word => {
        if(message.content.includes(word)){
           // message.channel.send("Kill your self! U are a racist!");
            setTimeout(() => message.delete(), 5000); 
        }
    });

});

client.login(process.env.TOKEN);