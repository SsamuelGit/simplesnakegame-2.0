
//create necessary variables
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let rows;
let columns;


//render the canvas (set canvas size to 3/4 of the screen size)
window.onload = function() {
    canvas.style.width = (window.innerWidth / 4 * 3) + 'px';
    canvas.style.height = (window.innerHeight / 4 * 3)  + 'px'; 
    console.log(rows);
    console.log(columns);
}
window.onresize = function() {
    canvas.style.width = (window.innerWidth / 4 * 3) + 'px';
    canvas.style.height = (window.innerHeight / 4 * 3)  + 'px';
    rows = calculateCellProperties("row", canvas);
    columns = calculateCellProperties("column", canvas); 
    console.log(rows);
    console.log(columns);
}


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



