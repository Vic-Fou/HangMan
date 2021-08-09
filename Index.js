const prompt= require("readline-sync");
const wordBank = require("./Word-Bank.JSON")

console.log("\nWelcome to Hang-Man!\nPress ctr+c to stop.\n")

const letter = prompt.question("Please guess a letter: ");

let chosenWord = wordBank[Math.floor[Math.random()*wordBank.length]];
let answerArray=[""];
for(let i=0;i<chosenWord.length;i++){
    answerArray[i]="_";
};
console.log(letter)

console.log(wordBank[0]);
//console.log('YOU WON!');