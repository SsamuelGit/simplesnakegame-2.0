//create necessary variables
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let rows = 16

//set canvas size to screen size * 3/4
window.onload = function() {
    canvas.style.width = (window.innerWidth / 4 * 3) + 'px';
    canvas.style.height = (window.innerHeight / 4 * 3)  + 'px';
}

//call the functions so that the game works
draw();

//very important function to calculate the game
function gameLoop() {

}

//very important function to draw the game
function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, screenWidth, screenHeight);
}