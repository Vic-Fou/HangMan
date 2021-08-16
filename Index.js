const prompt= require("readline-sync");
const wordBank= ["fish","punch","liquid","fudge","slay","magic","run","fun","coding","program","computer","algorithim","equation","chicken","boredom"];//require("./Word-Bank.JSON");

console.log("\nWelcome to Hang-Man!\nPress ctr+c to end game.\n");

let chosenWord= wordBank[Math.floor(Math.random()*wordBank.length)];
let chosenWord2= wordBank[Math.floor(Math.random()*wordBank.length)];
let chosenWord3= wordBank[Math.floor(Math.random()*wordBank.length)];

/*let parsedWordBank = JSON.parse(JSON.stringify(wordBank[""]));
let chosenWord= parsedWordBank[Math.floor(Math.random()*parsedWordBank.length)];*/

//console.log(chosenWord);

let answerArray=[];
for(let i=0;i<chosenWord.length;i++){
    answerArray[i]="_";
};

let AnswerArray2=[];
for(let k=0;k<chosenWord2.length;k++){
    AnswerArray2[k]="_"
}

let AnswerArray3=[];
for(let l=0;l<chosenWord3.length;l++){
    AnswerArray3[l]="_"
}

let letterRemainder=chosenWord.length;
let lettterRemainder2=chosenWord2.length;
let letterRemainder3=chosenWord3.length;

//use these variants to make assests to be used in the other rounds


let wrongGuesses = 0;
let numberOfRounds= 1;

//increment rounds toward the end , then console.log them to show the player which they are on

do{
    console.log("*Round"+" "+numberOfRounds+""+"*\n")
    console.log(answerArray.join(" "));
    console.log(wrongGuesses,"wrong guesses")

    const letterGuessed = prompt.question("Please guess a letter: ");
    if (letterGuessed.length!==1){
        console.log("Please enter one letter.");
    }
    else if(letterGuessed===null){
        return;
    }
    else if(!chosenWord.includes(letterGuessed)){
        console.log("\n O\nIncorrect.Try a different letter");
        wrongGuesses++;
        if(wrongGuesses===2){
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
            console.log(" O\n/|)\n/ |\noh no! The word was "+chosenWord+"\nGameover.")
            return
    }
}
    //this needs to be cleaned up so that the wrongGuesses won't increment with the right answer
    //Also the Hangman and gameover should only show if the player is doing wrong
    //Done
    else{
    
        for(let j=0;j<chosenWord.length; j++){
        if (chosenWord[j]===letterGuessed){
            answerArray[j] = letterGuessed;
            letterRemainder--;
            console.log(letterRemainder);
                }
      
            }
        }
        //find a way to track rounds then increment them to make the while loop repeat
        //use the new asssets
    if (letterRemainder===0){    
        console.log("Good Job, The answer was "+chosenWord);
        numberOfRounds++
        if(numberOfRounds===2){
            let ;
            console.log(answerArray.join(" "));

        }
      }  
    }

while(/*letterRemainder>0 &&*/ wrongGuesses <= 6 && numberOfRounds < 3);
     /* {
    //may have to change condition to && once rounds are included/
    console.log("*Round"+" "+numberOfRounds+""+"*\n")
    console.log(answerArray.join(" "));
    console.log(wrongGuesses,"wrong guesses")

    const letterGuessed = prompt.question("Please guess a letter: ");
    if (letterGuessed.length!==1){
        console.log("Please enter one letter.");
    }
    else if(letterGuessed===null){
        return;
    }
    else if(!chosenWord.includes(letterGuessed)){
        console.log("\n O\nIncorrect.Try a different letter");
        wrongGuesses++;
        if(wrongGuesses===2){
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
            console.log(" O\n/|)\n/ |\noh no! The word was "+chosenWord+"\nGameover.")
            return
    }
}
    //this needs to be cleaned up so that the wrongGuesses won't increment with the right answer
    //Also the Hangman and gameover should only show if the player is doing wrong
    //Done
    else{
    
        for(let j=0;j<chosenWord.length; j++){
        if (chosenWord[j]===letterGuessed){
            answerArray[j] = letterGuessed;
            letterRemainder--;
            console.log(letterRemainder);
                }
      
            }
        }
        //find a way to track rounds then increment them to make the while loop repeat
    if (letterRemainder===0){    
        console.log("Good Job, The answer was "+chosenWord);
        numberOfRounds++
      }  
    }*/
//}
//console.log(answerArray.join(" "));

// Don't forget to include arrow functions



