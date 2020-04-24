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
    //row 1 elements
   let one = document.getElementById('1').innerHTML;
   let two = document.getElementById('2').innerHTML;
   let three = document.getElementById('3').innerHTML;
   //row 2 elements
   let four = document.getElementById('4').innerHTML;
   let five = document.getElementById('5').innerHTML;
   let six = document.getElementById('6').innerHTML;
   //row 3 elements
   let seven = document.getElementById('7').innerHTML;
   let eight = document.getElementById('8').innerHTML;
   let nine = document.getElementById('9').innerHTML;

   //----------- ROW LOGIC ----------------------//

   if (one == 'X' && two == three && three == one) {
       alert('X wins!');
   }

   if (one == 'O' && two == three && three == one) {
    alert('O wins!');
}

   if (four == 'X' && five == four && six == five) {
       alert('X wins!');
   }

   if (four == 'O' && five == four && six == five) {
    alert('O wins!');
   }

   if (seven == 'X' && eight == seven && nine == eight) {
    alert('X wins!');   
   }

   if (seven == 'O' && eight == seven && nine == eight) {
    alert('O wins!');   
   }

   //------------------ COLUMN LOGIC ------------------//

   if (one == 'X' && four == one && seven == four) {
       alert('X wins!');
   }

   if (one == 'O' && four == one && seven == four) {
       alert('O wins!');
   }

   if (two == 'X' && five == two && eight == five) {
       alert('X wins!');
   }

   if (two == 'O' && five == two && eight == five) {
       alert('O wins!');
   }

   
   if (three == 'X' && six == three && nine == six) {
    alert('X wins!');
   }

   if (three == 'O' && six == three && nine == six) {
    alert('O wins!');
   }

   //--------------- DIAGONAL LOGIC --------------------//

   
};
