function startGame(){
    startButton.disabled = true;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
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

function rockSelect(){
    userGuess = rockButton.textContent;
    checkGuess(userGuess);
}

function paperSelect(){
    userGuess = paperButton.textContent;
    checkGuess(userGuess);
}

function scissorsSelect(){
    userGuess = scissorsButton.textContent;
    checkGuess(userGuess);
}

function checkGuess(){
    if (userGuess === ""){
        inputs.textContent = "You have not put in an appropriate response. Please try again."
        gameOver();
        return;
    }
    if (userGuess.toLowerCase() === cpuChoiceStr.toLowerCase()){
        playerScore++;
        if (playerScore < 5) {
            inputs.textContent = "Congratulations, you've guessed correctly! The score is now (Player: " + playerScore + " CPU: " + cpuScore + ")"
        } else {
            inputs.textContent = "Final score: (Player: " + playerScore + " CPU: " + cpuScore + ")"
        }
        gameOver();
    } else {
        cpuScore++;
        if (cpuScore < 5) {
            inputs.textContent = "Sorry, you have lost! The score is now (Player: " + playerScore + " CPU: " + cpuScore + ")"
        } else {
            inputs.textContent = "Final score: (Player: " + playerScore + " CPU: " + cpuScore + ")"
        }
        gameOver();
    }
}

function gameOver(){
    if (playerScore === 5 || cpuScore === 5){
        inputs.textContent = "Final score: (Player: " + playerScore + " CPU: " + cpuScore + ")"
        resetButton = document.createElement("button");
        resetButton.textContent = "Reset Game";
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame);
    } else {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        nextButton = document.createElement("button");
        nextButton.textContent = "Next round";
        document.body.appendChild(nextButton);
        nextButton.addEventListener("click", resetGame);
    }
}

function resetGame(){
    startButton.disabled = false;
    if (playerScore === 5 || cpuScore === 5){
        resetButton.parentNode.removeChild(resetButton);
        inputs.textContent = "";
        playerScore = 0;
        cpuScore = 0;
    } else {
        nextButton.parentNode.removeChild(nextButton);
    }
    cpuChoiceNum = Math.floor(Math.random() * 3) + 1;
    startGame();
}

const startButton = document.querySelector("#startButton");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const guessField = document.querySelector(".guessField");
const inputs = document.querySelector(".inputs");
let playerScore = 0;
let cpuScore = 0;
let cpuChoiceNum = Math.floor(Math.random() * 3) + 1;
let cpuChoiceStr;
let userGuess;

startButton.addEventListener("click", startGame);
rockButton.addEventListener("click", rockSelect);
paperButton.addEventListener("click", paperSelect);
scissorsButton.addEventListener("click", scissorsSelect);
rockButton.disabled = true;
paperButton.disabled = true;
scissorsButton.disabled = true;
