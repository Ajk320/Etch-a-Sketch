const gridContainer = document.querySelector('#gridContainer');
let gridItems;
let currentGridSize;
let newGridSize;

function createGrid(size) {
    // Clear previous grid
    gridContainer.innerHTML = '';
    newGridSize = size * 32;
    gridContainer.style.maxWidth = `${newGridSize}px`;


    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }

    gridItems = document.getElementsByClassName('grid-item');
    Array.from(gridItems).forEach(gridItem => {
        // gridItem.style.flexBasis = flexBasis;
        gridItem.addEventListener("mouseover", changeColor);
    });

    currentGridSize = size;
    console.log(currentGridSize);
}

function changeColor() {
    this.style.background = "black";
}

const gridSizeButton = document.getElementById('gridSizePrompt');

gridSizeButton.addEventListener("click", changeGridSize);

function changeGridSize() {
    let newGridSize = prompt("Enter the new grid size");

    if (newGridSize && newGridSize > 0) {
       
        createGrid(newGridSize);
    }
}



// initial grid creation
createGrid(16);
