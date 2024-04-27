
//render the canvas (set canvas size to screen size * 3/4)
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
window.onload = function() {
    canvas.style.width = (window.innerWidth / 4 * 3) + 'px';
    canvas.style.height = (window.innerHeight / 4 * 3)  + 'px';
}

//create necessary variables
const rows = calculateCellProperties("row");
const columns = calculateCellProperties("column"); 
console.log(rows);
console.log(columns);

//call the functions so that the game works
draw();

//very important function to calculate the game
function gameLoop() {

}

//very important function to draw the game
function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, window.innerWidth / 4 * 3, window.innerHeight / 4 * 3);
}

//other functions
function calculateCellProperties(sizeToBeCalculated) {      //calculates the rows and columns so that the cell height and width are greater than or equal to 30
    if (sizeToBeCalculated == "row") {
        let cellHeight = 1;
        let numberOfRows;
        for (numberOfRows = 500; cellHeight < 30; numberOfRows--) {
            cellHeight = canvas.style.height / numberOfRows;
        }
        return numberOfRows;
    }
    if (sizeToBeCalculated == "column") {
        let cellWidth = 1;
        let numberOfColumns;
        for (numberOfColumns = 500; cellWidth < 30; numberOfColumns--) {
            cellWidth = canvas.style.width / numberOfColumns;
        }
        return numberOfColumns;
    }
}

//other functions
function calculateCellProperties(sizeToBeCalculated) {
    if (sizeToBeCalculated == "row") {
        let cellHeight = 1;
        let numberOfRows;
        for (numberOfRows = 500; cellHeight < 30; numberOfRows--) {
            cellHeight = canvas.style.height / numberOfRows;
        }
        return numberOfRows;
    }
    if (sizeToBeCalculated == "column") {
        let cellWidth = 1;
        let numberOfColumns;
        for (numberOfColumns = 500; cellWidth < 30; numberOfColumns--) {
            cellWidth = canvas.style.width / numberOfColumns;
        }
        return numberOfColumns;
    }
}