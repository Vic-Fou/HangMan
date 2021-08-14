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



let guess = 0;
let wrongGuesses = 0;
while(letterRemainder>0 && wrongGuesses <= 6) {
    //console.log(answerArray.join(" "));
    console.log(wrongGuesses,"wrong guesses")

    const letterGuessed = prompt.question("Please guess a letter: ");
    if (letterGuessed.length!==1){
        console.log("Please enter one letter.");
    }
    else if(letterGuessed===null){
        break;
    }
    //this needs to be cleaned up so that the wrongGuesses won't increment with the right answer
    //Also the Hangman and gameover should only show if the player is doing wrong
    else{
        if (!chosenWord.includes(answerArray)){
            console.log("\n O\nTry a different letter");
            wrongGuesses++;
            if (wrongGuesses===2){
                console.log(" O\n/");
            }
            else if(wrongGuesses===3){
                console.log(" O\n/|");
            }
            else if(wrongGuesses===4){
                console.log(" O\n/|)");
            }
            else if(wrongGuesses===5){
                console.log(" O\n/|)\n/");
            }
            else if(wrongGuesses===6){
                console.log(" O\n/|)\n/ |\noh no! Gameover.")
                break
            }
             
        }
    }
        for(let j=0;j<chosenWord.length; j++){
        if (chosenWord[j]===letterGuessed){
            answerArray[j] = letterGuessed;
            letterRemainder--;
            console.log(letterRemainder);
           }  

        }
    
console.log(answerArray.join(" "));
console.log("Good Job, The answer was "+chosenWord);
}
// Don't forget to include arrow functions



