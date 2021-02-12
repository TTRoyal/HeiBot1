const Discord = require('discord.js');
const client = new Discord.Client();

module.exports={
    name:'ping',
    description: "Command ini digunakan untuk Ping",
    execute(message, args){
        
    if(Date.now()  - message.createdTimestamp > `500` ) {
       message.channel.send(`> Le ping est de ${Date.now()  - message.createdTimestamp} ms\n> Indice de ping: 🔴`);
        console.log(`Le ping est de ${Date.now()  - message.createdTimestamp} ms`)
  }else{
     
       message.channel.send(`> Le ping est de  ${Date.now()  - message.createdTimestamp} ms\n> Indice de ping: :green_circle:`)
    }
  } 

   };
