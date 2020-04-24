console.log("We got a connection here");
//------------------------------------------------------//
//------  function for placing either "X" or "O" --------//
//-----------------------------------------------------//

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

//--------------------------------------------------------------------------//
//---------------  function for resetting gameboard  ---------------------  //
//--------------------------------------------------------------------------//

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

//-----------------------------------------------------------------------------------//
//---------------------- function for game win or tie -------------------------------//
//-----------------------------------------------------------------------------------//

function gameOver () {
   let one = document.getElementById('1').innerHTML;
   let two = document.getElementById('2').innerHTML;
   let three = document.getElementById('3').innerHTML;
//    console.log(one.innerHTML + two.innerHTML + three.innerHTML);
   let four = document.getElementById('4').innerHTML;
   let five = document.getElementById('5').innerHTML;
   let six= document.getElementById('6').innerHTML;
   console.log(`element 4 ${four},   element 5 ${five},   element 6 ${six}`)

   if (one == 'X' &&)




   if (four == 'X' && five == four && six == five) {
       alert('X wins');
   }

   if (four == 'O' && five == four && six == five) {
    alert('O wins');
}
};
