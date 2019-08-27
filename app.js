
var app = new Vue({
        el: '#app',
        data: {
            symbol: '$',
            height: "10",
        },
        computed: {
            rows() {
                return drawPyramid(this.height, this.symbol)
            },
        },
        methods: {
            clearAndRedraw(evt) {
                evt.preventDefault();
                this.height = parseInt(this.heightStr);
        }
    }
})

function drawPyramid(height,symbol) {
    var height = parseInt(height)
    var rowStrings = [];
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

        rowStrings.push(rowStr);
    }
    return rowStrings;
}

