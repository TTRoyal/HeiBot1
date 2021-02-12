module.exports={
    name:'leave',
    description: "Le bot quitte un salon vocal",
    execute(message, args){
 
 if(!message.guild.me.voice.channel) {
     message.channel.send("```J'étais dejas déconnecté…``` "); 
     
 }else{
message.guild.me.voice.channel.leave(); 
message.channel.send("```📤│je me suis déconnecté…```")
} 
   
    }
     
 };