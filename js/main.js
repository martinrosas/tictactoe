var playerTurn = "X";
var counter = 0;
var aTicTacToe = [];
var cResult = "tbd";

//The reload() method reloads the current document.
function Reset_Game()
{
  document.location.reload();
}

function Winner()
{
  var cLine ="tbd";

 if(aTicTacToe[1]+aTicTacToe[2]+aTicTacToe[3]=="XXX" ||
    aTicTacToe[4]+aTicTacToe[5]+aTicTacToe[6]=="XXX" ||
    aTicTacToe[7]+aTicTacToe[8]+aTicTacToe[9]=="XXX" ||
    aTicTacToe[1]+aTicTacToe[4]+aTicTacToe[7]=="XXX" ||
    aTicTacToe[2]+aTicTacToe[5]+aTicTacToe[8]=="XXX" ||
    aTicTacToe[3]+aTicTacToe[6]+aTicTacToe[9]=="XXX" ||
    aTicTacToe[1]+aTicTacToe[5]+aTicTacToe[9]=="XXX" ||
    aTicTacToe[3]+aTicTacToe[5]+aTicTacToe[7]=="XXX" )
{
  // set cLine to X
  cLine="X";
}

 if(aTicTacToe[1]+aTicTacToe[2]+aTicTacToe[3]=="OOO" ||
    aTicTacToe[4]+aTicTacToe[5]+aTicTacToe[6]=="OOO" ||
    aTicTacToe[7]+aTicTacToe[8]+aTicTacToe[9]=="OOO" ||
    aTicTacToe[1]+aTicTacToe[4]+aTicTacToe[7]=="OOO" ||
    aTicTacToe[2]+aTicTacToe[5]+aTicTacToe[8]=="OOO" ||
    aTicTacToe[3]+aTicTacToe[6]+aTicTacToe[9]=="OOO" ||
    aTicTacToe[1]+aTicTacToe[5]+aTicTacToe[9]=="OOO" ||
    aTicTacToe[3]+aTicTacToe[5]+aTicTacToe[7]=="OOO" )
{
  //set cLine to O
  cLine="O";
}

return cLine;

}
//Inputs the X's and O's
function sqrClicked(objThis)
{
if(objThis.innerHTML == '') // if box is an empty string
{
  if(playerTurn == "X") //if player turn is X
{
  //set objthis.innerHTML to a black X
  objThis.innerHTML = "<div style=color:black>X</div>";
  //set player turn to O
playerTurn = "O";
//add 1 to counter
counter++;

var iElement = objThis.id;

aTicTacToe[iElement] = "X";
}
else
{
  objThis.innerHTML = "<div style=color:black>O</div>";

  playerTurn = "X";

  counter++;
  //register click in the tictactoe array
  var iElement = objThis.id;

  aTicTacToe[iElement] = "O";
}
}
//sets cResult to be the winner function result
cResult = Winner();

if(cResult=="X"||cResult=="O")
{
  ShowMessage(cResult + (" is the winner!"));

}
//if 8 moves inputed in empty boxes and no winner declare draw
if(counter>8)
{
  ShowMessage("The Game is a Draw");
}
}
//shows the winner message in the messageBox
function ShowMessage(Result)
{
  //set message location which is messageBox
var objMessage = document.getElementById("messageBox");
//setting output to result
var output = Result; //setting output to result
//replacing the content of messageBox to Result
objMessage.innerHTML = output;


}
