function makeGrid(side) {
    const container = document.querySelector('.container');

    let dim = (600 / side) + "px";
    for (let i = 1; i <= side * side; i++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.setAttribute('id', i);
                box.style.height = dim;
                box.style.width = dim; 

                container.appendChild(box);
    }

    let objects = document.querySelectorAll(".box");
    objects.forEach((object) => {
        object.addEventListener("mouseover", () => {
            colorIt(object.id);
        });
    });
}


function colorIt(selection) {
    let temp = document.getElementById(selection);
    temp.style.backgroundColor = "black";
}

let side = 4;

makeGrid(side);

let button = document.querySelector("button");

button.addEventListener('click', () => {
        const parent = document.getElementsByClassName("box");
    
        while(parent.length > 0){
            parent[0].remove();
        }

        
        let side = prompt("Enter the no of sq per side on the canvas: ");
        makeGrid(side);
        return;
});