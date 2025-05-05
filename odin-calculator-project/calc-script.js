function toggleButtons(state) {
  buttons.forEach(btn => btn.disabled = !state);
  if (!state) clearEverything();
}

function setNumber(num) {
  if (num === "." && currentInput.includes(".")) return;
  if (num === "-" && currentInput.startsWith("-")) {
    currentInput = currentInput.slice(1); // toggle off
  } else if (num === "-") {
    currentInput = "-" + currentInput;
  } else {
    currentInput += num;
  }

  inputs.textContent = currentInput;

  if (equateState === 1) {
    a = currentInput;
  } else {
    b = currentInput;
  }
}

function clearEverything() {
  inputs.textContent = "";
  answer.textContent = "";
  currentInput = "";
  a = b = c = operator = "";
  equateState = 1;
}

function clear(){
    inputs.textContent = "";
    currentInput = "";
    answer.textContent = "";
    equateState === 1 ? a = "" : b = "";
}

function handleOperator(op) {
  operator = op;
  equateState = 2;
  currentInput = "";
  inputs.textContent = "";
}

function parseEquation() {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    answer.textContent = "Error";
    return;
  }

  switch (operator) {
    case "+": c = numA + numB; break;
    case "-": c = numA - numB; break;
    case "*": c = numA * numB; break;
    case "/": c = numA / numB; break;
  }

  answer.textContent = c;
  inputs.textContent = c;
  currentInput = "";
  a = c.toString(); // for chaining
  b = "";
  operator = "";
  equateState = 2;
}

function powerOnOff() {
  power = !power;
  toggleButtons(power);
  console.log(power ? "Power On" : "Power Off");
}

let currentInput = "";
let a, b, c;
let operator = "";
let equateState = 1;
let power = false;

const inputs = document.querySelector(".inputs");
const answer = document.querySelector(".answer");

const buttonIds = [
    "power", "clear-everything", "clear", "divide", "multiply", "add", "subtract",
    "equals", "pos-neg", "decimal", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "zero"
  ];
  
const buttonsMap = {};
  
buttonIds.forEach(id => {
    buttonsMap[id] = document.querySelector(`#${id}`);
});
// All buttons to be toggled on/off
const buttons = [
    buttonsMap["clear-everything"], buttonsMap["clear"], buttonsMap["divide"], buttonsMap["multiply"],
    buttonsMap["add"], buttonsMap["subtract"], buttonsMap["equals"], buttonsMap["pos-neg"],
    buttonsMap["decimal"], buttonsMap["one"], buttonsMap["two"], buttonsMap["three"],
    buttonsMap["four"], buttonsMap["five"], buttonsMap["six"], buttonsMap["seven"],
    buttonsMap["eight"], buttonsMap["nine"], buttonsMap["zero"]
  ];  

// Numbers
["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].forEach((id, i) => {
    buttonsMap[id].addEventListener("click", () => setNumber(i));
});

   
// Operators
buttonsMap["add"].addEventListener("click", () => handleOperator("+"));
buttonsMap["subtract"].addEventListener("click", () => handleOperator("-"));
buttonsMap["multiply"].addEventListener("click", () => handleOperator("*"));
buttonsMap["divide"].addEventListener("click", () => handleOperator("/"));
   
// Control
buttonsMap["power"].addEventListener("click", powerOnOff);
buttonsMap["clear-everything"].addEventListener("click", clearEverything);
buttonsMap["clear"].addEventListener("click", clear);
buttonsMap["equals"].addEventListener("click", parseEquation);
buttonsMap["decimal"].addEventListener("click", () => setNumber("."));
buttonsMap["pos-neg"].addEventListener("click", () => setNumber("-"));
   
toggleButtons(false);