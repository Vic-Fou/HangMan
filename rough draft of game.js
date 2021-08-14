const prompt= require("readline-sync");
const wordBank= ["fish","punch","liquid","fudge","slay","magic","run","fun","coding","program","computer","algorithim","equation","chicken","boredom"];//require("./Word-Bank.JSON");

console.log("\nWelcome to Hang-Man!\nPress ctr+c to end game.\n");

let pickRandomWord=()=>{
let chosenWord= wordBank[Math.floor(Math.random()*wordBank.length)];
return chosenWord
}
pickRandomWord()
/*let parsedWordBank = JSON.parse(JSON.stringify(wordBank[""]));
let chosenWord= parsedWordBank[Math.floor(Math.random()*parsedWordBank.length)];*/

//console.log(chosenWord);

const answerSetUp=(chosenWord)=>{
    let answerArray=[];
    chosenWord=pickRandomWord
    for(let i=0;i<chosenWord.length;i++){
        answerArray[i]="_";
    };

    return answerArray;
}


let letterRemainder=(word)=>{
    word=pickRandomWord
    return word.length;
}


while(answerSetUp>0){

    const userProgression=(answer)=>{
        answer=answerSetUp()
        return console.log(answer.join(" "))
    };
    const getGuess=()=>{
        return prompt.question("Please guess a letter: ");
    };
    const gameState=(guess,word,answerArray)=>{
        guess=getGuess;
        word=pickRandomWord;
        answerArray=userProgression;
        if (guess.length!==1 ){
            console.log("Oops!Please enter one letter.");
        }
       /* else if(/[a-zA-Z]/.test(guess)){
            return true
        }
        else if(/[^a-zA-Z]/.test(guess)){
            console.log("Please only use letters.")
            return false
        }*/
        else if(guess===null){
            return;
        }
        else{
            for(let j=0;j<word.length; j++){
            if (word[j]===guess){{
                answerArray[j] = guess;
                letterRemainder--;
                };}
                else if(/[a-zA-Z]/.test(guess)){
                    return true

            }
            else if(/^[a-zA-Z]/.test(guess)){
                console.log("Please only use letters.")
                return false
            }

            else{
                return console.log("O\nOops! Please try another letter")
                };
            };
        };
    };
    return gameState;
};
//youwin= console.log(userprogression.join(" "));
//rightAnswer=console.log("Good Job! the answer was"+pickRandomWord)
//can I make rounds with a for loop or should I make a while loop during the game state?
//console.log('YOU WON!');