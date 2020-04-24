console.log("We got a connection here");

//need to create an event listener to get the specific
//table cell that is clicked on. 
//Need to have an alias set to placeX
//(maybe have it toggle between booleans for "X" or "O")
//When a cell is clicked, depending on the value of placeX
//my function should place either an "x" or "o" in that cell

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
