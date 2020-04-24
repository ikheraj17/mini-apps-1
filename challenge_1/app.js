console.log("We got a connection here");
//--------------------------------------//
//function for placing either "X" or "O"//
//-------------------------------------//

let placeX = true;

function play (id) {
    if (placeX) {

         id.innerHTML = "X";
         placeX = !placeX;

        } else {

            id.innerHTML = "O";
            placeX = !placeX;

        }
};

//--------------------------------------//
//  function for resetting gameboard    //
//-------------------------------------//

function reset () {
    var board = document.getElementById("gameboard");
    var cells = board.getElementsByTagName("td");

    for(var i = 0; i < cells.length; i ++) {
        let cell = cells[i];
        if (cell.textContent) {
            cell.textContent = null;
        }
    }
    placeX = true;
};

//------------------------------//
// function for game win or tie //
//------------------------------//

function gameOver () {
    //array of first row cells
    const row1 = document.getElementById('row1');
    const cells1 = row1.getElementsByTagName('td');
    //array of second row cells
    const row2 = document.getElementById('row1');
    const cells2 = row1.getElementsByTagName('td');
    //array of third row cells
    const row3 = document.getElementById('row1');
    const cells3 = row1.getElementsByTagName('td');

    //------------------------------------------------------//
    //-------------- conditions for rows -------------------//
    //-----------------------------------------------------//

    if (cells1[0].textContent === cells1[1].textContent && cells1[2].textContent === cells1[1].textContent) {
        alert(`${cells1[0].textContent} wins the game!`);
        reset();
        return;
    }

    if (cells2[0].textContent === cells2[1].textContent && cells2[2].textContent === cells1[1].textContent) {
        alert(`${cells1[0].textContent} wins the game!`);
        reset();
        return;
    }

    if (cells3[0].textContent === cells3[1].textContent && cells3[2].textContent === cells1[1].textContent) {
        alert(`${cells1[0].textContent} wins the game!`);
        reset();
        return;
    }

    //------------------------------------------------------//
    //-------------- conditions for columns -------------------//
    //-----------------------------------------------------//



}
