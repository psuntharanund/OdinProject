function startGrid(x, y){
    gridContainer.innerHTML = "";
    const cellWidth = 960 / x;
    const cellHeight = 960 / y;
    for (let i = 0; i < x * y; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.addEventListener("mouseenter", addColor)
        gridContainer.appendChild(cell);
    }
}

function addColor(){
    this.classList.add("color");
}

function adjustGrid(){
    let col = prompt("Please enter how many columns you want(max 100): ");
    x = Number(col);
    let row = prompt("Please enter how many rows you want(max 100): ");
    y = Number(row);
    if (x > 100 || y > 100 || x <= 0 || y <= 0 || isNaN(x) || isNaN(y)){
        inputs.textContent = "You have put in an invalid number. Please refresh the page."
    } else {
        inputs.textContent = "Created a(n) " + x + "x" + y + "grid."
        gridContainer.innerHTML = "";
        startGrid(x,y);
    }
}

const gridContainer = document.querySelector("#flexGrid");
const gridSetter = document.querySelector("#gridSetter");
const inputs = document.querySelector(".inputs");

gridSetter.addEventListener("click", adjustGrid);
let x = 16;
let y = 16;
startGrid(x, y);
 