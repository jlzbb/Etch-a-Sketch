const container = document.querySelector(".container");

function createSquare(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div"); 
        div.classList.add("square");
        div.style.flex = `1 1 calc(100% / ${size})`;
        container.appendChild(div);
    }
}

createSquare(4);