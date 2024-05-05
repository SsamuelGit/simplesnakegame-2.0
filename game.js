
//create necessary variables
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let rows = canvas.height / 30;
let columns = canvas.width / 30;

//call the functions so that the game works
draw();
gameLoop();

//very important function to calculate the game
function gameLoop() {

}

//very important function to draw the game
function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, window.innerWidth / 4 * 3, window.innerHeight / 4 * 3);
}

//other functions



