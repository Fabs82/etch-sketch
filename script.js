const sketchContainer = document.querySelector("#sketchContainer");
const sketchContainerWidth = 832;
const sketchContainerHeight = 832;
sketchContainer.style.width = sketchContainerWidth + "px";
sketchContainer.style.height = sketchContainerHeight + "px";
const resetButton = document.querySelector(".btn");
const eraseColorButton = document.querySelector(".eraseBtn");
const blackButton = document.querySelector(".blackBtn");
const rgbButton = document.querySelector(".rgbBtn");
let numberOfSquares = 16;


function squareHeight(height, number) {
    const singleSquareHeight = (`${height / number}px`);
    return singleSquareHeight;
};

function squareWidth(width, number) {
    const singleSquareWidth = (`${width / number}px`);
    return singleSquareWidth;
};

function randomNumber() {
    return (Math.floor(Math.random() * 256));
};

function randomRgbColor() {
    return (`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`);
};

function createSquareDiv() {
    const square = document.createElement("div");
    square.classList.add("squareDiv");
    square.style.width = squareWidth(sketchContainerWidth, numberOfSquares);
    square.style.height = squareHeight(sketchContainerHeight, numberOfSquares);
    sketchContainer.appendChild(square);
};

function createGrid(numberOfSquares) {
    for (let index = 0; index < numberOfSquares ** 2; index++) {
        createSquareDiv();
    };
};

function squareColor(color) {
    const squareNodes = document.querySelectorAll(".squareDiv");
    squareNodes.forEach(element => {
        element.classList.add("newBackground");
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = color();
        });
    });
};

function askNumber() {
    numberOfSquares = Number(prompt("Enter a number between 1 and 100:"));
    while (numberOfSquares > 100 || numberOfSquares < 0 || isNaN(numberOfSquares)) {
        numberOfSquares = Number(prompt("Invalid input! Please enter a number between 1 and 100:"));
    };
    return numberOfSquares;
};

resetButton.addEventListener("click", () => {
    const squareNodes = document.querySelectorAll(".squareDiv");
    squareNodes.forEach(element => {
        sketchContainer.removeChild(element);
    });
    createGrid(askNumber());
});

eraseColorButton.addEventListener("click", () => { squareColor(() => sketchContainer.style.backgroundColor) });
blackButton.addEventListener("click", () => { squareColor(() => "black") });
rgbButton.addEventListener("click", () => { squareColor(randomRgbColor) });

createGrid(numberOfSquares);