let divContainer = document.querySelector(".div-container");
let isDown = false;

divContainer.addEventListener("mouseleave", () => {
    isDown = false;
});

drawGrid(16);

function drawGrid(size) {
    let px = 960 / size;
    for(let i = 0; i < size*size; i++){
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("style", `width: ${px}px; height: ${px}px; opacity: 0`);
        gridDiv.addEventListener("mousedown", () => {
            isDown = true;
            darkenGrid(gridDiv);
        });
        gridDiv.addEventListener("mouseenter", () => {
            if(isDown) {
                darkenGrid(gridDiv);
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

let resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", () => {
    let num = prompt("Enter an integer between 1 and 100");
    if (num != null) {
        num = parseInt(num);
        while(num > 100 || num < 1 || isNaN(num)) {
            num = prompt("Try again! Enter an integer between 1 and 100");
            num = parseInt(num);
        }
    }
    
    divContainer.replaceChildren();
    drawGrid(num);
});