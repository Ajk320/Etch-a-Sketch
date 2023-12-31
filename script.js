const gridContainer = document.querySelector('#gridContainer');

for(let i = 0; i< 16*16; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

const gridItems = document.getElementsByClassName('grid-item');
Array.from(gridItems).forEach(gridItem => {
    gridItem.addEventListener("mouseover", changeColor);
});

function changeColor(){
    this.style.background = "black";
}