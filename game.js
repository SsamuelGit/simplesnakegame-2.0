const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
//set canvas size to screen size
window.onload = function() {
    const canvas = document.getElementById("canvas");
    window.onresize = function() {
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
}


draw();

function gameLoop() {

}
function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, screenWidth, screenHeight);
}