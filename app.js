
function destroyGrid(containerName) {
    document.querySelectorAll(".dBox").forEach(e => e.remove());
    document.querySelectorAll(".flexRow").forEach(e => e.remove());
    return;
}

function createGrid(s) {
    let size = s;
    let container = document.querySelector(".container");
    if(container.classList.contains("gridExists")) {
        destroyGrid(".container");
    }
    
    for(let i = 0; i < size; ++i) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("flexRow");
        for(let j = 0; j < size; ++j) {
            let dBox = document.createElement("div");
            dBox.classList.add("dBox");
            newDiv.appendChild(dBox);
        }
        container.appendChild(newDiv);
    }
    container.classList.add("gridExists");
}

function draw() {
    let eachBox = document.querySelectorAll(".dBox");
    eachBox.forEach(box => {
        box.addEventListener("mouseover", (e) => {
            e.target.classList.add("grey-box");
        });
    });
}

let sizeButton = document.querySelector(".setSize");
sizeButton.addEventListener("click", () => {
    let userInput = prompt("enter size: ", "10");
    if(isNaN(userInput) || userInput > 100) {
        alert("wrong input, try again.");
        return;
    }
    createGrid(userInput);
});

let drawButton = document.querySelector(".draw");
drawButton.addEventListener("click", () => draw());





