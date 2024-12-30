let divContainer = document.querySelector(".div-container");

drawGrid(16);

function drawGrid(size) {
    let px = 960 / size;
    let isDown = false;
    for(let i = 0; i < size*size; i++){
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("style", `width: ${px}px; height: ${px}px`);
        gridDiv.addEventListener("mousedown", () => {
            isDown = true;
            gridDiv.style.backgroundColor = "lightgray";
        });
        gridDiv.addEventListener("mouseenter", () => {
            if(isDown) {
                gridDiv.style.backgroundColor = "lightgray";
            }
        });
        gridDiv.addEventListener("mouseup", () => {
            isDown = false;
        });
        divContainer.appendChild(gridDiv);
    }
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