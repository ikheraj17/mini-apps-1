console.log("We got a connection here");
//------------------------------------------------------//
//------  function for placing either "X" or "O" --------//
//-----------------------------------------------------//

let placeX = true;
let counter = 0;

function play (id) {
    if(id.innerHTML != "X" && id.innerHTML != "O") {

        if (placeX) {

            id.innerHTML = "X";
            id.style.color = "rgb(52, 227, 233)";
            placeX = !placeX;
   
           } else {
   
               id.innerHTML = "O";
               id.style.color = "white";
               placeX = !placeX;
   
           }
           counter ++;
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
    
    document.getElementById('one').innerHTML = "tic";
    document.getElementById('five').innerHTML = 'tac';
    document.getElementById('nine').innerHTML = 'toe';

    document.getElementById('one').style.color = "gray";
    document.getElementById('five').style.color = 'gray';
    document.getElementById('nine').style.color = 'gray';
    one = 'tic';
    placeX = true;
    counter = 0;
};

//-----------------------------------------------------------------------------------//
//---------------------- function for game win or tie -------------------------------//
//-----------------------------------------------------------------------------------//

function gameOver () {
    //row 1 elements
   let one = document.getElementById('one').innerHTML;
   let two = document.getElementById('two').innerHTML;
   let three = document.getElementById('three').innerHTML;
   //row 2 elements
   let four = document.getElementById('four').innerHTML;
   let five = document.getElementById('five').innerHTML;
   let six = document.getElementById('six').innerHTML;
   //row 3 elements
   let seven = document.getElementById('seven').innerHTML;
   let eight = document.getElementById('eight').innerHTML;
   let nine = document.getElementById('nine').innerHTML;

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

   if (one == 'X' && five == one && nine == five) {
       alert('X wins!');
   }

   if (one == 'O' && five == one && nine == five) {
    alert('O wins!');
   }

   if (three == 'X' && five == three && seven == five) {
    alert('X wins!');
   }

   if (three == 'O' && five == three && seven == five) {
 alert('O wins!');
   } 

   //-------------------- TIE GAME LOGIC ----------------//

   if (counter == 9) {
       alert('Tie game!');
   }

};
