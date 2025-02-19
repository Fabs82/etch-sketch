const sketchContainer = document.querySelector("#sketchContainer");
const numberOfSquares = 16;

function createSquareDiv() {
    const square = document.createElement("div");
    square.classList.add("squareDiv");
    sketchContainer.appendChild(square);
}

function createMultilpeDivs(numberOfSquares) {
    for (let index = 0; index < numberOfSquares ** 2; index++) {
        createSquareDiv();
    };
};

function randomNumber() {
    return (Math.floor(Math.random() * 256));
};

function randomRgbColor() {
    return (`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`);
}

createMultilpeDivs(numberOfSquares);


const squareNodes = document.querySelectorAll(".squareDiv");
squareNodes.forEach(element => {
    element.classList.add("newBackground");
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = randomRgbColor();
    });
});

