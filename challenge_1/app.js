console.log("We got a connection here");
//--------------------------------------//
//function for placing either "X" or "O"//
//-------------------------------------//

let placeX = true;

function play (id) {
    //set alias for turns
    
    //X goes if placeX is true
    if (placeX) {
        //place an X in cell
        id.innerHTML = "X";
        //toggle turn
        placeX = !placeX;
        //O goes if placeX is false
    } else {
        //place an O in cell
        id.innerHTML = "O";
        //toggle turn
        placeX = !placeX;
    }
}

//--------------------------------------//
//  function for resetting gameboard    //
//-------------------------------------//

function reset () {
    var board = document.getElementById("gameboard");
    var cells = board.getElementsByTagName("td");
    console.log(cells);

    for(var i = 0; i < cells.length; i ++) {
        let cell = cells[i];
        if (cell.textContent) {
            cell.textContent = null;
        }
    }
    placeX = true;
};
