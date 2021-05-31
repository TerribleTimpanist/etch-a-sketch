const defaultSize = 16;
const maxSize = 100;


function makeGrid(size) {
    var gridDiv = document.getElementById("grid");
    while(gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    gridDiv.style.gridTemplateColumns = "1fr ".repeat(size);
    gridDiv.style.gridTemplateRows = "1fr ".repeat(size);
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            var cell = document.createElement("div");
            cell.classList.toggle("inner");
            cell.addEventListener("mouseover", onCellHover);
            document.getElementById("grid").appendChild(cell);
        }
    }
}

function onCellHover(e) {
    if(e.buttons === 1) {
        e.target.style.backgroundColor = document.getElementById("colorPicker").value;
    }
}

document.getElementById("resetBtn").addEventListener('click', () => {
    var sizeStr = prompt("How many squares on each side? (Up to 100)");
    var size = parseInt(sizeStr);
    if((!size) || size > maxSize) {
        alert("Invalid input. Using default size of" + defaultSize.toString());
        size = defaultSize;
    }
    makeGrid(size);
});

makeGrid(defaultSize);