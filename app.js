let app = new Vue({
    el: '#app',
    data: {
        symbol: '$',
        height: "10",
    },
    computed: {
        //this updates every time the input is changed
        rows() {
            return drawPyramid(this.height, this.symbol)
        }
    }
})

function drawPyramid(height,symbol) {
    let rowStrings = [];
    for (let row = 0; row < height; row++) {

        let numBricks = row + 2;
        let numSpaces = height - row - 1;

        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        rowStrings.push(rowStr);
    }
    return rowStrings;
}

