// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Defining user input height, width and element.
    var pixelHeight = document.querySelector("#inputHeight").value;
    var pixelWidth = document.querySelector("#inputWeight").value;    
    var pixelTable = document.querySelector("#pixel_canvas");

    // Change table when user re-submit height and width.
    while (pixelTable.hasChildNodes()) {
        pixelTable.removeChild(pixelTable.lastChild);
    }

    // Loops, to make table focus on user input.
    for (let row = 0; row < pixelHeight; row++) {
        let tr = document.createElement('tr');
        tr.id = 'row-' + row;
        pixelTable.appendChild(tr);
        for (let col = 0; col < pixelWidth; col++) {
            let td = document.createElement('td');
            td.id = 'row-' + row + '_cell-' + col;
            pixelTable.lastChild.appendChild(td);
        }
    }

    // add new events of all document.querySelectorAll("td").
    let tableCells = Array.from(document.querySelectorAll("td"));
    // Each cell must have an event listener that changes background color of the cell.
    tableCells.forEach(function (cell) {
        cell.addEventListener("click", function () {
            this.style.backgroundColor = document.querySelector("#colorPicker").value;
        }, false);
    });
}
// adding event listener if form is submitted and call makeGrid() 
document.querySelector("#sizePicker").addEventListener("submit", function (e) {
    e.preventDefault();
    makeGrid();
}, false);