

var computerChoice = ["b","s","u"];
var wins = 0;
var losses = 0;
var guesses = 9;
var userChoiceText = [];

var directionsText = document.getElementById("directions-text");
var userChoiceText1 = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessleft-text");


function resetGame(){
    guesses = 9;
}
function userChoiceReset(){
    userChoiceText = [];
}

document.onkeyup = function(event){
    var userGuess = event.key;
    userChoiceText.push(userGuess);
    console.log(userGuess);
    console.log(userChoiceText);
    userChoiceText1.textContent = "You guess: " + userChoiceText;
    var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log(computerGuess);
    if (userGuess !== computerGuess) {
        guesses--;
        
    } else  {
        wins++;
        resetGame();
        userChoiceReset();
        // if (wins++){
        // guesses === 9;
        // }
    } 
    
    if (guesses === 0){
        losses ++;
        resetGame();
        userChoiceReset();
    }


// computerChoiceText.textContent = "The computer chose: " + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessLeftText.textContent = "Guess left: " + guesses;
// userChoiceText1.textContent = "You guess: " + userChoiceText;
userChoiceText.textContent = "User Guess: " + userChoice.pop(userChoiceText);

};