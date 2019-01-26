// AUTHENTICATION
const Discord = require("discord.js"); //https://discord.js.org/#/docs/main/stable/general/welcome
const client = new Discord.Client(); //Get "npm install opusscript"
// CONFIGURATION FILES
const config = require("./config/config.json");

// LOGIN
client.login(config.token);

// CONFIRM READY
client.on("ready", () => {
    let date = new Date();
    console.log('\x1b[33m', `cBOT has started on ${date}.`);
    client.user.setActivity(
        'you', {
            type: 'WATCHING'
        });
    client.user.setStatus('online');
});


// AUTO-RESPONDER
var mTimes={};
var c={}
var lastTimeSent=0;
client.on("message", async message => {
     if (message.author.id != client.user.id){
    try{mTimes[message.channel].push(Date.now());c[message.channel]+=1;}
    catch(TypeError){mTimes[message.channel]=[Date.now()];c[message.channel]=1;}
    while(mTimes[message.channel] != [] && mTimes[message.channel][0]+60*1000 <Date.now()) mTimes[message.channel],c[message.channel]=mTimes[message.channel].slice(1),c[message.channel]-1;
    if(rng(c[message.channel])){
        message.channel.send(msg(Date.now()-lastTimeSent));
        c[message.channel]=0;
        mTimes[message.channel]=[];
        lastTimeSent=Date.now();
    }}
})

function rng(i){
    return Math.random() <= Math.pow(1/(1+Math.pow(2,5-i)),2);
}
function msg(i){
    console.log(i);
    if (Math.random()<Math.pow(20000/i,4))return "SHUT THE HELL UP, goddamnit";//stronger follow up
    if (Math.random()<.6)return "shut the hell up, dammit";//initial reprimand
    return "HEY! I'm trying to teach here";//other case
}
//https://discordapp.com/api/oauth2/authorize?client_id=517897194615865364&permissions=34816&scope=bot