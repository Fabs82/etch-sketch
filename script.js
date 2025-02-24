const sketchContainer = document.querySelector("#sketchContainer");
let numberOfSquares = 16;
const sketchContainerWidth = 832;
const sketchContainerHeight = 832;
const singleSquareWidth = (`${sketchContainerWidth / numberOfSquares}px`);
const singleSquareHeight = (`${sketchContainerWidth / numberOfSquares}px`);
sketchContainer.style.width = sketchContainerWidth + "px";
sketchContainer.style.height = sketchContainerHeight + "px";


function randomNumber() {
    return (Math.floor(Math.random() * 256));
};

function randomRgbColor() {
    return (`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`);
};

function createSquareDiv() {
    const square = document.createElement("div");
    square.classList.add("squareDiv");
    square.style.width = singleSquareWidth;
    square.style.height = singleSquareHeight;
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
    //numberOfSquares = Number(prompt("Enter a number:"));
});



