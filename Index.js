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
  "populace",
  "amazing",
  "grace",
  "finesse",
  "unconditional",
  "own",
  "object",
  "permanent",
  "data",
]; 

console.log("\nWelcome to Hang-Man!\nPress ctr+c to end game.\n");

let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

let chosenWord2 = wordBank[Math.floor(Math.random() * wordBank.length)];

let chosenWord3 = wordBank[Math.floor(Math.random() * wordBank.length)];




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



let wrongGuesses = 0;
let wrongGuesses2 = 0;
let wrongGuesses3 = 0;
let numberOfRounds = 1;



while (letterRemainder3 > 0 && wrongGuesses <= 6 && numberOfRounds <= 4) {
  console.log("*Round" + " " + numberOfRounds + "" + "*\n");
  console.log(answerArray.join(" "));
  console.log(wrongGuesses, "wrong guesses");

  let letterGuessed = prompt.question("Please guess a letter: ");
  if (letterGuessed.length !== 1) {
    console.log("Please enter letters.");
  } else if (letterGuessed === null) {
    return;
  } else if (!/^[a-zA-Z]*$/g.test(letterGuessed)) {
    console.log("\nInvalid.\nPlease enter letters.");
  } else if (/^[A-Z]*$/g.test(letterGuessed)) {
    letterGuessed === letterGuessed.toLowerCase();
    console.log("\nPlease type in lowercase temporarily\n (awaiting patch)");
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
 
  else {
    for (let j = 0; j < chosenWord.length; j++) {
      if (chosenWord[j] === letterGuessed) {
        answerArray[j] = letterGuessed;
        letterRemainder--;
        console.log(letterRemainder);
      } else if (letterRemainder === 0) continue;
    }
  }
  
  while (letterRemainder === 0) {
    console.log("Good Job, The answer was " + chosenWord);

    let numberOfRounds = 2;
    console.log("*Round" + " " + numberOfRounds + "" + "*\n");

    if (numberOfRounds === 2) {
      console.log(answerArray2.join(" "));
      console.log(wrongGuesses2, "wrong guesses");

      let letterGuessed2 = prompt.question("Please guess a letter: ");
      if (letterGuessed2.length !== 1) {
        console.log("Please enter one letter.");
      } else if (/^[A-Z]*$/g.test(letterGuessed2)) {
        letterGuessed2 === letterGuessed2.toLowerCase();
        console.log(
          "\nPlease type in lowercase temporarily\n (awaiting patch)"
        );
      } else if (letterGuessed2 === null) {
        return;
      } else if (!/^[a-zA-Z]*$/g.test(letterGuessed)) {
        console.log("\nInvalid.\nPlease enter letters.");
      } else if (!chosenWord2.includes(letterGuessed2)) {
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
      } else {
        for (let m = 0; m < chosenWord2.length; m++) {
          if (chosenWord2[m] === letterGuessed2) {
            answerArray2[m] = letterGuessed2;
            letterRemainder2--;
            console.log(letterRemainder2);
          } else if (letterRemainder2 === 0) continue;
        }
      } 
      while (letterRemainder2 === 0) {
        console.log("Good Job,the answer was " + chosenWord2);
        let numberOfRounds = 3;
        console.log("*Round" + " " + numberOfRounds + "" + "*\n");

        if (numberOfRounds === 3) {
          console.log(answerArray3.join(" "));
          console.log(wrongGuesses3, "wrong guesses");

          let letterGuessed3 = prompt.question("Please guess a letter: ");
          if (letterGuessed3.length !== 1) {
            console.log("Please enter one letter.\n");
          } else if (letterGuessed3 === null) {
            return;
          } else if (!/^[a-zA-Z]*$/g.test(letterGuessed)) {
            console.log("\nInvalid.\nPlease enter letters.\n");
          } else if (/^[A-Z]*$/g.test(letterGuessed3)) {
            letterGuessed3 === letterGuessed3.toLowerCase();
            console.log(
              "\nPlease type in lowercase temporarily\n (awaiting patch)"
            );
          } else if (!chosenWord3.includes(letterGuessed3)) {
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
                " O\n/|)\n/ |\noh no! The word was " +
                  chosenWord3 +
                  "\nGameover."
              );
              return;
            }
          } else {
            for (let n = 0; n < chosenWord3.length; n++) {
              if (chosenWord3[n] === letterGuessed3) {
                answerArray3[n] = letterGuessed3;
                letterRemainder3--;
                console.log(letterRemainder3);
              }
              if (letterRemainder3 === 0) {
                console.log(
                  "Good Job,The answer was " +
                    chosenWord3 +
                    "\nCongratulations!!!\n**YOU WON**\nPress ctr+c to exit out of the game"
                );
                break;
              }
            }
          }
        }
      }
    }
  }
}

