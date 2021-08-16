const prompt = require("readline-sync");
const wordBank = [
  "fish",
  "punch",
  "liquid",
  "fudge",
  "slay",
  "magic",
  "run",
  "fun",
  "coding",
  "program",
  "computer",
  "algorithim",
  "equation",
  "chicken",
  "boredom",
]; //require("./Word-Bank.JSON");

console.log("\nWelcome to Hang-Man!\nPress ctr+c to end game.\n");

let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(chosenWord)
let chosenWord2 = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(chosenWord2)
let chosenWord3 = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(chosenWord3)

/*let parsedWordBank = JSON.parse(JSON.stringify(wordBank[""]));
let chosenWord= parsedWordBank[Math.floor(Math.random()*parsedWordBank.length)];*/

//console.log(chosenWord);

let answerArray = [];
for (let i = 0; i < chosenWord.length; i++) {
  answerArray[i] = "_";
}

let answerArray2 = [];
for (let k = 0; k < chosenWord2.length; k++) {
  answerArray2[k] = "_";
}

let answerArray3 = [];
for (let l = 0; l < chosenWord3.length; l++) {
  answerArray3[l] = "_";
}

let letterRemainder = chosenWord.length;

let letterRemainder2 = chosenWord2.length;

let letterRemainder3 = chosenWord3.length;

//use these variants to make assests to be used in the other rounds

let wrongGuesses = 0;
let wrongGuesses2 = 0;
let wrongGuesses3 = 0;
let numberOfRounds =1;

//increment rounds toward the end , then console.log them to show the player which they are on

 while (letterRemainder3>0 && wrongGuesses <= 6 && numberOfRounds <= 4){;
 console.log("*Round" + " " + numberOfRounds + "" + "*\n");
 console.log(answerArray.join(" "));
 console.log(wrongGuesses, "wrong guesses");

 const letterGuessed = prompt.question("Please guess a letter: ");
 if (letterGuessed.length !== 1) {

   console.log("Please enter letters.");

 } else if (letterGuessed === null) {

   return;

 } else if (!/^[a-zA-Z]*$/g.test(letterGuessed)){
    console.log("\nInvalid.\nPlease enter letters.")

 } else if (!chosenWord.includes(letterGuessed)) {

   console.log("\n O\nIncorrect.Try a different letter");
   wrongGuesses++;

   if (wrongGuesses === 2) {
     console.log(" O\n/");
   } else if (wrongGuesses === 3) {
     console.log(" O\n/|");
   } else if (wrongGuesses === 4) {
     console.log(" O\n/|)");
   } else if (wrongGuesses === 5) {
     console.log(" O\n/|)\n/");
   } else if (wrongGuesses === 6) {
     console.log(
       " O\n/|)\n/ |\noh no! The word was " + chosenWord + "\nGameover."
     );
     return;
   }
 }
 //this needs to be cleaned up so that the wrongGuesses won't increment with the right answer
 //Also the Hangman and gameover should only show if the player is doing wrong
 //Done
 else {
   for (let j = 0; j < chosenWord.length; j++) {
     if (chosenWord[j] === letterGuessed) {
       answerArray[j] = letterGuessed;
       letterRemainder--;
       console.log(letterRemainder);
     }
     else if (letterRemainder===0) continue;
     ;
   }
 }
 //find a way to track rounds then increment them to make the while loop repeat
 //use the new asssets
 while (letterRemainder === 0) {
   console.log("Good Job, The answer was " + chosenWord);
   
   let numberOfRounds=2;
   console.log("*Round" + " " + numberOfRounds + "" + "*\n");
   
   if (numberOfRounds === 2) {
     console.log(answerArray2.join(" "));
     console.log(wrongGuesses2, "wrong guesses");

     const letterGuessed2 = prompt.question("Please guess a letter: ");
     if (letterGuessed2.length !== 1) {
       console.log("Please enter one letter.");
     } else if (letterGuessed2 === null) {
       return;
     }else if (!/^[a-zA-Z]*$/g.test(letterGuessed)){
      console.log("\nInvalid.\nPlease enter letters.")
  
    }else if (!chosenWord2.includes(letterGuessed2)) {
       console.log("\n O\nIncorrect.Try a different letter");
       wrongGuesses2++;
       if (wrongGuesses2 === 2) {
         console.log(" O\n/");
       } else if (wrongGuesses2 === 3) {
         console.log(" O\n/|");
       } else if (wrongGuesses2 === 4) {
         console.log(" O\n/|)");
       } else if (wrongGuesses2 === 5) {
         console.log(" O\n/|)\n/");
       } else if (wrongGuesses2 === 6) {
         console.log(
           " O\n/|)\n/ |\noh no! The word was " + chosenWord2 + "\nGameover."
         );
         return;
       }
     }

     else {
       for (let m = 0; m < chosenWord2.length; m++) {
         if (chosenWord2[m] === letterGuessed2) {
           answerArray2[m] = letterGuessed2;
           letterRemainder2--;
           console.log(letterRemainder2);
         }
         else if (letterRemainder2===0) continue;
       }
     }//}
   while (letterRemainder2===0){
       
       console.log("Good Job,the answer was "+ chosenWord2);
       let numberOfRounds=3;
       console.log("*Round" + " " + numberOfRounds + "" + "*\n");
       
       if (numberOfRounds === 3) {
        console.log(answerArray3.join(" "));
        console.log(wrongGuesses3, "wrong guesses");
   
        const letterGuessed3 = prompt.question("Please guess a letter: ");
        if (letterGuessed3.length !== 1) {
          console.log("Please enter one letter.\n");
        } else if (letterGuessed3 === null) {
          return;
        }else if (!/^[a-zA-Z]*$/g.test(letterGuessed)){
         console.log("\nInvalid.\nPlease enter letters.\n")
     
       }else if (!chosenWord3.includes(letterGuessed3)) {
          console.log("\n O\nIncorrect.Try a different letter\n");
          wrongGuesses3++;
          if (wrongGuesses3 === 2) {
            console.log(" O\n/");
          } else if (wrongGuesses3 === 3) {
            console.log(" O\n/|");
          } else if (wrongGuesses3 === 4) {
            console.log(" O\n/|)");
          } else if (wrongGuesses3 === 5) {
            console.log(" O\n/|)\n/");
          } else if (wrongGuesses3 === 6) {
            console.log(
              " O\n/|)\n/ |\noh no! The word was " + chosenWord3 + "\nGameover."
            );
            return;
          }
        }
   
        else {
          for (let n = 0; n < chosenWord3.length; n++) {
            if (chosenWord3[n] === letterGuessed3) {
              answerArray3[n] = letterGuessed3;
              letterRemainder3--;
              console.log(letterRemainder3);
            }
            if (letterRemainder3===0){
              console.log("Good Job,The answer was "+ chosenWord3+"\nCongratulations!!!\n**YOU WON**\nPress ctr+c to exit out of the game")
              break
            } 
              ;
          }
        }
   }
}
}
}
}
//console.log(answerArray.join(" "));

// Don't forget to include arrow functions
