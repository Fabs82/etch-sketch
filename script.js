const sketchContainer = document.querySelector(".sketchContainer");

function createSquareDiv() {
    const square = document.createElement("div");
    square.classList.add("squareDiv");
    sketchContainer.appendChild(square);
}

function createMultilpeDivs(number) {
    for (let index = 0; index < number ** 2; index++) {
        createSquareDiv()
    };
};

createMultilpeDivs(16);