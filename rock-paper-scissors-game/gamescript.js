function startGame(){
    console.log("Game has started!");
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
        inputs.textContent = "Congratulations, you've guessed correctly!"
        gameOver();
    } else {
        inputs.textContent = "Sorry, you have lost the game."
        gameOver();
    }
}

function gameOver(){
    startButton.disabled = true;
    guessField.disabled = true;
    submitButton.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    startButton.disabled = false;
    guessField.disabled = false;
    submitButton.disabled = false;
    resetButton.parentNode.removeChild(resetButton);
    inputs.textContent = "";
    guessField.value = "";
    cpuChoiceNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

const startButton = document.getElementById("startButton");
const submitButton = document.getElementById("submitButton");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const inputs = document.querySelector(".inputs");
let cpuChoiceNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let cpuChoiceStr;

startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", checkGuess);

