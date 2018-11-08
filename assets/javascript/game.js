

var computerChoice = ["b","s","u"];
var wins = 0;
var losses = 0;
var guesses = 9;
var userChoice = [];

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessleft-text");
var computerChoiceText = document.getElementById("computerchoice-text");

function resetGame(){
    guesses = 9;
}

document.onkeyup = function(event){
    var userGuess = event.key;
    console.log(userGuess);
    var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log(computerGuess);
    if (userGuess !== computerGuess) {
        guesses--;
    } else  {
        wins++;
        resetGame();
        // if (wins++){
        // guesses === 9;
        // }
    } 
    
    if (guesses === 0){
        losses ++;
        resetGame();
    }

userChoiceText.textContent = "You guess: " + userGuess;
// computerChoiceText.textContent = "The computer chose: " + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessLeftText.textContent = "Guess left: " + guesses;
// userChoiceText.textContent = "User Guess: " + userChoice.pop(userChoiceText);

};