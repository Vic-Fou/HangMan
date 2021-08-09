const prompt= require("readline-sync");
const wordBank = require("./Word-Bank.JSON")

const letter = prompt.question("Please guess a letter")

let chosenWord = wordBank[math.floor[math.random()*wordBank.length]];
let answerArray=[""];
for(let i=0;i<chosenWord.length;i++){
    answerArray[i]="_";
};
console.log(letter)

//console.log(wordBank[0]);
//console.log('YOU WON!');