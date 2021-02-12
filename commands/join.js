module.exports={
    name:'join',
    description: "Le bot rejoint un salon vocal",
    execute(message, args){
        if(!message.member.voice.channel) return message.channel.send("```⚠️│Tu dois dejas être dans un salon vocal avant d'éxevuter la commande…```"); //If you are not in the voice channel, then return a message
message.member.voice.channel.join();

if(!message.guild.me.voice.channel){
message.channel.send("```📥│Je suis connecté au salon vocal…```")
    }else{
    message.channel.send("```je suis déjas connecté…```")
    }    
    }
      };