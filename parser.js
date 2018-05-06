// Define JSON File
var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("message.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);

var aliMessages = 0;
var hudMessages = 0;
var merMessages = 0;
var aliReceived = 0;
var hudReceived = 0;
var merReceived = 0;
var aliHud = 0;
var aliMer = 0;
var merHud = 0;
var merAli = 0;
var hudAli = 0;
var hudMer = 0;
var aliHudMention = 0;
var aliMerMention = 0;
var merHudMention = 0;
var merAliMention = 0;
var hudAliMention = 0;
var hudMerMention = 0;

var reacts;
var emojiReaction = "\u00f0\u009f\u0091\u008e" //laugh: "\u00f0\u009f\u0098\u0086", dislike: "\u00f0\u009f\u0091\u008e"
var timestamp = 0 //1514764800; // Jan 1 2018

/*
[ 'messages',
  'title',
  'is_still_participant',
  'status',
  'thread_type',
  'participants',
  'thread_path' ]
*/

// Get Value from JSON
var count = jsonContent["messages"].length;
jsonContent["messages"].forEach(element => {
    if (element.sender_name == "Ali Serag El-Din" && element.timestamp > timestamp) {
        aliMessages++
        if (element.reactions){
            reacts = element.reactions
            aliReceived++
            reacts.forEach(emoji => { 
                if(emoji.actor == "Hudhaifah Zahid"){// && emoji.reaction == emojiReaction ){
                    hudAli++
                }
                if(emoji.actor == "Meryem Sena Kat\u00c4\u00b1rc\u00c4\u00b1o\u00c4\u009flu"){// && emoji.reaction == emojiReaction){
                    merAli++
                }
            })
        }
        try {
            if (element.content.includes("hud")){
                aliHudMention++
            }
            if (element.content.includes("mer")){
                aliMerMention++
            }
        }
        catch(e){

        }
    }
    if (element.sender_name == "Hudhaifah Zahid" && element.timestamp > timestamp) {
        hudMessages++
        if (element.reactions){
            reacts = element.reactions
            hudReceived++
            reacts.forEach(emoji => {
                if(emoji.actor == "Ali Serag El-Din"){// && emoji.reaction == emojiReaction){
                    aliHud++
                }
                if(emoji.actor == "Meryem Sena Kat\u00c4\u00b1rc\u00c4\u00b1o\u00c4\u009flu"){// && emoji.reaction == emojiReaction){
                    merHud++
                }
            })
        }
        try {
            if (element.content.includes("ali")){
                hudAliMention++
            }
            if (element.content.includes("mer")){
                hudMerMention++
            }
        }
        catch(e){

        }
        
    }
    if (element.sender_name == "Meryem Sena Kat\u00c4\u00b1rc\u00c4\u00b1o\u00c4\u009flu" && element.timestamp > timestamp) {
        merMessages++
        if (element.reactions){
            reacts = element.reactions
            merReceived++
            reacts.forEach(emoji => {
                if(emoji.actor == "Ali Serag El-Din"){// && emoji.reaction == emojiReaction){
                    aliMer++
                }
                if(emoji.actor == "Hudhaifah Zahid"){// && emoji.reaction == emojiReaction){
                    hudMer++
                }
            })
        }
        try{
            if (element.content.includes("hud")){
                merHudMention++
            }
            if (element.content.includes("ali")){
                merAliMention++
            }
        }
        catch(e){

        }
    }
});
console.log(count);
console.log("aliMessages: ",aliMessages);
console.log("hudMessages: ",hudMessages);
console.log("merMessages: ",merMessages);
console.log("aliReceived: ",aliReceived);
console.log("hudReceived: ",hudReceived);
console.log("merReceived: ",merReceived);
console.log("aliHud: ",aliHud);
console.log("aliMer: ",aliMer);
console.log("hudAli: ",hudAli);
console.log("hudMer: ",hudMer);
console.log("merAli: ",merAli);
console.log("merHud: ",merHud);
console.log("aliHudMention: ",aliHudMention);
console.log("aliMerMention: ",aliMerMention);
console.log("hudAliMention: ",hudAliMention);
console.log("hudMerMention: ",hudMerMention);
console.log("merAliMention: ",merAliMention);
console.log("merHudMention: ",merHudMention);

console.log("\n *EXIT* \n");
