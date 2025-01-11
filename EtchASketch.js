const container = document.querySelector(".container");

function createSquare(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div"); 
        div.style.flex = `1 1 calc(100% / ${size})`;
        div.classList.add("square");
        div.setAttribute("isColored", "false");
        container.appendChild(div);
    }
}

function changeColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hoverEffect() {
    const squares = document.querySelectorAll(".container .square");
    squares.forEach(square =>
        square.addEventListener("mouseover", function() {

            let isColored = square.getAttribute("isColored");

            if (isColored === "false") {
                square.style.backgroundColor = changeColor();
                square.style.opacity = 0.1;
                square.setAttribute("isColored", "true");
            }
            else if (isColored === "true") {
                let currentOpacity = Number(square.style.opacity);
                let newOpacity = currentOpacity + 0.1;
                square.style.opacity = String(newOpacity);
            }

        })
    )}

createSquare(8);
hoverEffect();