const Discord = require("discord.js");
require("dotenv").config();

const generateImage = require("./generateImage")

const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = '929790360299905076';

client.on("guildMemberAdd",async member => {
    const img = await generateImage(member);
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server`);
    files: [img]
})


client.login(process.env.TOKEN);