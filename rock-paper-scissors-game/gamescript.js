function startGame(){
    startButton.disabled = true;
    console.log(cpuChoiceNum);
    if (cpuChoiceNum === 1) {
        cpuChoiceStr = "Rock";
        console.log(cpuChoiceStr)
    } else if (cpuChoiceNum ===2) {
        cpuChoiceStr = "Paper";
        console.log(cpuChoiceStr);
    } else {
        cpuChoiceStr = "Scissors";
        console.log(cpuChoiceStr);
    }
}

function checkGuess(){
    let userGuess = String(guessField.value)
    if (userGuess === ""){
        inputs.textContent = "You have not put in an appropriate response. Please try again."
        gameOver();
        return;
    }
    if (userGuess.toLowerCase() === cpuChoiceStr.toLowerCase()){
        playerScore++;
        gameBestOfFive++;
        if (playerScore < 3) {
            inputs.textContent = "Congratulations, you've guessed correctly! The score is now (Player: " + playerScore + " CPU: " + cpuScore + ")"
        } else {
            inputs.textContent = "Final score: (Player: " + playerScore + " CPU: " + cpuScore + ")"
        }
        gameOver();
    } else {
        cpuScore++;
        gameBestOfFive++;
        if (cpuScore < 3) {
            inputs.textContent = "Sorry, you have lost! The score is now (Player: " + playerScore + " CPU: " + cpuScore + ")"
        } else {
            inputs.textContent = "Final score: (Player: " + playerScore + " CPU: " + cpuScore + ")"
        }
        gameOver();
    }
}

function gameOver(){
    guessField.disabled = true;
    submitButton.disabled = true;
    if (playerScore === 3 || cpuScore === 3 || gameBestOfFive > 5){
        inputs.textContent = "Final score: (Player: " + playerScore + " CPU: " + cpuScore + ")"
        resetButton = document.createElement("button");
        resetButton.textContent = "Reset Game";
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame);
    } else {
        nextButton = document.createElement("button");
        nextButton.textContent = "Next round";
        document.body.appendChild(nextButton);
        nextButton.addEventListener("click", resetGame);
    }
}

function resetGame(){
    startButton.disabled = false;
    guessField.disabled = false;
    submitButton.disabled = false;
    if (gameBestOfFive > 5 || playerScore === 3 || cpuScore === 3){
        resetButton.parentNode.removeChild(resetButton);
        inputs.textContent = "";
        guessField.value = "";
        playerScore = 0;
        cpuScore = 0;
        gameBestOfFive = 1;
    } else {
        nextButton.parentNode.removeChild(nextButton);
        guessField.value = "";
    }
    cpuChoiceNum = Math.floor(Math.random() * 3) + 1;
    startGame();
}

const startButton = document.getElementById("startButton");
const submitButton = document.getElementById("submitButton");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const inputs = document.querySelector(".inputs");
let playerScore = 0;
let cpuScore = 0;
let gameBestOfFive = 1;
let cpuChoiceNum = Math.floor(Math.random() * 3) + 1;
let cpuChoiceStr;

startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", checkGuess);

