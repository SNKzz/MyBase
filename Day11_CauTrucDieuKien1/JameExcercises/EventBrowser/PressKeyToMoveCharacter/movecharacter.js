window.addEventListener("keydown", moveCharacter);
let nobita = document.getElementById("img_nobita");
let container = window.getComputedStyle(document.getElementById("div_container"));

function moveCharacter() {
let widthDiv = parseInt(container.width);
let heightDiv = parseInt(container.height);
console.log(widthDiv);
console.log(heightDiv);

let position = window.getComputedStyle(nobita);
let convertPositionLeft = parseInt(position.left);
let convertPositionTop = parseInt(position.top);

    switch (event.key) {
        case "ArrowUp":
            if (convertPositionTop > 10) { 
                nobita.style.top = (convertPositionTop - 20) + "px";
            }
            break;

        case "ArrowDown":
            if (convertPositionTop < heightDiv-100) {
                nobita.style.top = (convertPositionTop + 20) + "px";
            }
            break;

        case "ArrowRight":
            if (convertPositionLeft < widthDiv-100) { 
                nobita.style.left = (convertPositionLeft + 20) + "px";
            }
            break;
        case "ArrowLeft":
            if (convertPositionLeft > 10) { 
                nobita.style.left = (convertPositionLeft - 20) + "px";
            }
            break;
}
}