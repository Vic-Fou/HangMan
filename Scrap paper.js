const wordBank= ["fish","punch","liquid","fudge","slay","magic","run","fun","coding","program","computer","algorithim","equation","chicken","boredom"];

let answerArray=[];
const words= wordBank[Math.floor(Math.random()*wordBank.length)];
for (let i=0;i<words.length;i++){
    answerArray[i]="_";
}
console.log(words);

let drawCatFaces = function(howManyTimes){
for (let i=0;i<howManyTimes;i++){
    console.log(i + "-_-");
};
}
drawCatFaces(100)
 

