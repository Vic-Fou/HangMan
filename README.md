# Victorious Foulks': HangMan Game
**Greetings** and thank you for visiting my small little _Hangman Game_. In this **README** I will explain what I used to create my _Hangman Game_.

### Overview
This project is a text basedtext based Hangman game with Node.js. Hangman is a word guessing game where the computer picks a word or phrase. A player must guess what the word or phrase is, letter-by-letter. If they make too many guesses, the hangman is "hung" and they will lose. 

For this game, I created multiple _rounds_. Each round will begin with the computer picking a word at random. The player will then make a series of guesses. The round will end when the player either guesses the entire word or _he/she_ guesses more than six letters. The computer will keep track of the number rounds the player has won and the total number of rounds played. It will display the results after each round ends.

## Project Objectives

1) Put together a practical line of code, based on what I know
2) Learn more about _Git_ and posting projects on the page
3) Build my **portfolio** as an _up and coming_ Front-End Developer

### Knowledge necessary Create Game

* Variables and Constants
* Primitive Data Types( Strings,Numbers,Booleans)
* Conditionals
* Loops (while loops and for loops)
* Arrays

## Starting Out

First I needed to [create a new public Github repository](https://help.github.com/en/articles/create-a-repo)(if you need help) for this project.Then I Named the new repository "hangman".If you would like to copy this, [clone the Github repository](https://help.github.com/en/articles/cloning-a-repository)(if you need help). Then type `cd hangman` in either your terminal or Git Bash.

Inside this folder, create a new file called _package.json_. Inside the file, copy and paste the following. Replace where is says `<YOUR NAME>` with your name and `<YOUR USERNAME>` with your Github username.

```json
{
  "name": "hangman",
  "version": "1.0.0",
  "engine": {
    "node": "16.3.0"
  },
  "main": "index.js",
  "author": "<YOUR NAME>",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/<YOUR USERNAME>/hangman.git"
  }
}
```

Inside this project, you will need to be able to read command line input. I suggest that you use the _[readline-sync](https://www.npmjs.com/package/readline-sync)_ library, which you can install by running this in your terminal:

```shell
npm install --save readline-sync
```

it is also okay to use Node's built in _[readline](https://nodejs.org/api/readline.html)_ module or any other library of your choice.

Inside the my _HangMan_ repository, I have a word bank file. This is the list of all the possible words that the computer can pick at random. Copy the _https://github.com/Vic-Fou/HangMan/blob/main/Word-Bank.JSON_ file and paste it into your new repository, if you would like to deep copy it, I personally just made my own word bank using vanilla JavaScript.

with that your first two lines will look like this.
```javascript
const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
```

##Starting the Game

first thing you should do is test to see if the terminal reads the game. I used Visual Studio Code and in that when I input node . to display the games **UI**. You should also be able to exit the game by pressing *_ctr+c_*

The player will guess a letter over the command line. They will type a single letter and hit `enter`. To get input from the player with the _readline-sync_ library, you will do something like this:

```javascript
const letter = prompt.question("Please guess a letter: ");
```

[You can read the full _readline-sync_ documentation here](https://www.npmjs.com/package/readline-sync).

### Application Requirements

- Your application must start over the command line with `node .`
- Your application should not crash at any point.

### UI Requirements

- **Bonus:**Use words from a word bank (_word-bank.json_). For each round, a word must be chosen at random.
- The game should have multiple rounds. Each round should end after either the player guesses the entire word or six incorrect guesses.
- After each round, display the answer (the word the computer picked) and the results. The results should be how many games the player won out of the total games played.
- Display visual feedback in the guessing portion of the game. Show which letter guesses are correct, what letters in what positions are still remaining, what letters the player has guessed and how many guesses are left.
- Only accept letters _(abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ)_. If a player guesses a special character, it should not count as a guess.
- Your game must be case insensitive. This means that when the player guesses a letter, the computer will treat lower case and upper case versions of a letter as the same character.
- Only accept one letter at a time. If the player enters more than one letter, only accept the first letter and ignore the rest. For example, if a player types "as", you should treat it like "a".
- Repeat guesses should not count against the player. For example, if the player has three guesses left, and he has already guessed the letter "a", he should still have three guesses left when he guesses "a" second time.
- The game will keep on going until the user presses `ctrl + c` to stop. You must include this in your instructions before each round.
- Please make sure your game text is easily readable. Use the new line characters (`\n`) where needed.

### Coding Requirements

- I DO NOT USE _var_, it's archaic

## Summary

and that's basically everything that I did, I hope you have fun recreating my code and don't beat yourself over the head doing this stuff. Take **breaks on days you work on it**, the right answers will come to you eventually. That's How I completed it anyway. **Thank you for your time!** 

## ~ Victorious Foulks
