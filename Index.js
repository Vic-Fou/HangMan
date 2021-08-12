const prompt= require("readline-sync");
const wordBank= ["fish","punch","liquid","fudge","slay","magic","run","fun","coding","program","computer","algorithim","equation","chicken","boredom"];//require("./Word-Bank.JSON");

console.log("\nWelcome to Hang-Man!\nPress ctr+c to end game.\n");

let chosenWord= wordBank[Math.floor(Math.random()*wordBank.length)];

/*let parsedWordBank = JSON.parse(JSON.stringify(wordBank[""]));
let chosenWord= parsedWordBank[Math.floor(Math.random()*parsedWordBank.length)];*/

//console.log(chosenWord);

let answerArray=[];
for(let i=0;i<chosenWord.length;i++){
    answerArray[i]="_";
};
let letterRemainder=chosenWord.length;


while(letterRemainder>0){
    console.log(answerArray.join(" "));
    const letterGuessed = prompt.question("Please guess a letter: ");
    if (letterGuessed.length!==1){
        console.log("Please enter one letter.");
    }
    else if(letterGuessed===null){
        break;
    }
    else{
        for(let j=0;j<chosenWord.length; j++){
        if (chosenWord[j]===letterGuessed){
            answerArray[j] = letterGuessed;
            letterRemainder--;
            }
        }
    }
}
console.log(answerArray.join(" "));
console.log("Good Job, The answer was "+chosenWord);