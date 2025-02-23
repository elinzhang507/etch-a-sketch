let divContainer = document.querySelector(".div-container");
let isDown = false;

let isDarkenChecked = false;
let isRandomChecked = false;

let inputSize = '';

divContainer.addEventListener("mouseleave", () => {
    isDown = false;
});

drawGrid(16);

function drawGrid(size) {
    let px = 960 / size;
    for(let i = 0; i < size*size; i++){
        let gridDiv = document.createElement("div");
        isDarkenChecked ? 
            gridDiv.setAttribute("style", `width: ${px}px; height: ${px}px; opacity: 0`) :
            gridDiv.setAttribute("style", `width: ${px}px; height: ${px}px`);
        gridDiv.addEventListener("mousedown", () => {
            isDown = true;
            if(isDarkenChecked) darkenGrid(gridDiv);
            if(isRandomChecked) setRandomColour(gridDiv);
            if(!isDarkenChecked && !isRandomChecked) gridDiv.style.backgroundColor = "lightgray";
        });
        gridDiv.addEventListener("mouseenter", () => {
            if(isDown) {
                if(isDarkenChecked) darkenGrid(gridDiv);
                if(isRandomChecked) setRandomColour(gridDiv);
                if(!isDarkenChecked && !isRandomChecked) gridDiv.style.backgroundColor = "lightgray";
            }
        });
        gridDiv.addEventListener("mouseup", () => {
            isDown = false;
        });
        divContainer.appendChild(gridDiv);
    }
}

function darkenGrid(gridDiv) {
    let currentOpacity = parseFloat(gridDiv.style.opacity);
    if (currentOpacity < 1) {
        gridDiv.style.opacity = currentOpacity + 0.1;
    }
    gridDiv.style.backgroundColor = "black";
}

function setRandomColour(gridDiv) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    gridDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", () => {
    inputSize = prompt("Enter an integer between 1 and 100");
    if (inputSize != null) {
        inputSize = parseInt(inputSize);
        while(inputSize > 100 || inputSize < 1 || isNaN(inputSize)) {
            inputSize = prompt("Try again! Enter an integer between 1 and 100");
            inputSize = parseInt(inputSize);
        }
    }
    divContainer.replaceChildren();
    drawGrid(inputSize);
});

let darkenGridOption = document.querySelector("#darken-option");
let randomColoursOption = document.querySelector("#random-option");

darkenGridOption.addEventListener("change", (event) => {
    isDarkenChecked = event.target.checked;
    divContainer.replaceChildren();
    inputSize === '' ? drawGrid(16) : drawGrid(inputSize)
});

randomColoursOption.addEventListener("change", (event) => {
    isRandomChecked = event.target.checked;
    divContainer.replaceChildren();
    inputSize === '' ? drawGrid(16) : drawGrid(inputSize)
});