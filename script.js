const sketchContainer = document.querySelector("#sketchContainer");
const sketchContainerWidth = 832;
const sketchContainerHeight = 832;
sketchContainer.style.width = sketchContainerWidth + "px";
sketchContainer.style.height = sketchContainerHeight + "px";

let numberOfSquares = 16;


function squareHeight(height, number) {
    const singleSquareHeight = (`${height / number}px`);
    return singleSquareHeight
};

function squareWidth(width, number) {
    const singleSquareWidth = (`${width / number}px`);
    return singleSquareWidth
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
    const squareNodes = document.querySelectorAll(".squareDiv");
    squareNodes.forEach(element => {
        element.classList.add("newBackground");
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = randomRgbColor();
        });
    });
};

createGrid(numberOfSquares);

const resetButton = document.querySelector(".btn");

resetButton.addEventListener("click", () => {
    const squareNodes = document.querySelectorAll(".squareDiv");
    squareNodes.forEach(element => {
        sketchContainer.removeChild(element);
    });
    numberOfSquares = Number(prompt("Enter a number:"));
    createGrid(numberOfSquares)
});



