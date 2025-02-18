const sketchContainer = document.querySelector(".sketchContainer");

function createSquareDiv() {
    const square = document.createElement("div");
    square.classList.add("squareDiv");
    sketchContainer.appendChild(square);
}

for (let index = 0; index < 16; index++) {
    createSquareDiv()
};