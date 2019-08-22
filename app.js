const pyramidDiv = document.querySelector("#pyramid");

function main () {
    let symbol = document.getElementById('brick-select').value;
    let height = document.getElementById('height-select').value; 
    document.getElementById("height-value").innerHTML = height;
    pyramidDiv.innerHTML = '';
    height = parseInt(height);
    var createP = document.createElement('p')
    createP.innerHTML = drawPyramid(height, symbol);
}

function drawPyramid(height, symbol) {
    document.getElementById("pyramid").innerHTML = "";
    for (var row = 0; row < height; row++) {
        var numBricks = row + 2;
        var numSpaces = height - row - 1;
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; 
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}