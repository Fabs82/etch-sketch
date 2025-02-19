const sketchContainer = document.querySelector("#sketchContainer");
const sketchContainerWidth = 832;
const sketchContainerHeight = 832;
sketchContainer.style.width = sketchContainerWidth + "px";
sketchContainer.style.height = sketchContainerHeight + "px";
const numberOfSquares = 32;

function createSquareDiv() {
    const square = document.createElement("div");
    square.classList.add("squareDiv");
    square.style.width = (`${sketchContainerWidth / numberOfSquares}px`);
    square.style.height = (`${sketchContainerWidth / numberOfSquares}px`);
    sketchContainer.appendChild(square);
};

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

