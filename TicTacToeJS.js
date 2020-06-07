


let tictactoe = [
					['', '', ''],
					['', '', ''],
					['', '', '']
				];

const player = {
	player1: 'X',
	player2: 'O'
}

var currentPlayer = 'X';

function restart(){
  currentPlayer = 'X';
  var elementArray = document.querySelectorAll('td');
  elementArray.forEach(el => el.innerHTML = '');
  tictactoe = [
					['', '', ''],
					['', '', ''],
					['', '', '']
				];
 document.getElementById('congo-banner').innerHTML = '';


}


//Function to update the winning message and show it on the screen

function winningmessage(){
	document.getElementById('congo-banner').textContent = currentPlayer + ' Wins!!';
}

//Function to check if current player is the winner
function currentwinner(){
	return(tictactoe[0][0] === currentPlayer && tictactoe[0][1] === currentPlayer &&tictactoe[0][2] === currentPlayer ||
	   tictactoe[1][0] === currentPlayer && tictactoe[1][1] === currentPlayer &&tictactoe[1][2] === currentPlayer ||
	   tictactoe[2][0] === currentPlayer && tictactoe[2][1] === currentPlayer &&tictactoe[2][2] === currentPlayer ||
	   tictactoe[0][0] === currentPlayer && tictactoe[1][1] === currentPlayer &&tictactoe[2][2] === currentPlayer ||
	   tictactoe[0][2] === currentPlayer && tictactoe[1][1] === currentPlayer &&tictactoe[2][0] === currentPlayer 
	    );
}


function change(element,i,j){

//chnage the value of the cell clicked
  if(element.innerHTML == '')
  {
  	element.innerHTML = currentPlayer;
  console.log(currentPlayer);
//update the value in the matrix
  tictactoe[i][j] = currentPlayer;
}

//check if the current player is the winner and show winning message
  if(currentwinner()){
  	winningmessage();
  }

 //Update the value of current player after each turn
  currentPlayer = currentPlayer === player.player1 ? player.player2 : player.player1;

}
