const prompt= require("readline-sync");
const wordBank = require("./Word-Bank.JSON")

const letter = prompt.question("Please guess a letter")

//console.log(wordBank[0]);
console.log('YOU WON!\n
You beat 3 out of 5 rounds');