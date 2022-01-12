// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
let playerTurnIs = "x";
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`)?restartGame():0;
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing


/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  if(checkPlayer() == "x")
  {
    checkIfCanPlayThis(index)?changePlayerTurn():0;
    (checkIfCanPlayThis(index)?fillButton(index, "X"):0);
  }else
  {
    checkIfCanPlayThis(index)?changePlayerTurn():0;
    (checkIfCanPlayThis(index)?fillButton(index, "O"):0);
  }

  console.log(checkWinner());
  (checkWinner()?changePlayerTurn():0);
  (checkWinner()?winningAlert(checkPlayer()):0);
}

// change players turn
function changePlayerTurn()
{
  return (checkPlayer()==="x"? playerTurnIs="o": playerTurnIs="x");
}
/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer() {
  // ....
  checkWinner();
  return playerTurnIs;
}

function checkIfCanPlayThis(index)
{
  return (document.getElementById(index).innerHTML===""?true:false);
}



/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
function checkWinner()
{
  // first get the list of filled boxs
  let boxs = []
  for(i=1;i<10;i++)
  {
    boxs.push(document.getElementById(i).innerHTML);
  }
  let xInBoxs = boxs.map((x,index) => (x.toLowerCase()==="x"?index:""));
  let oInBoxs = boxs.map((o,index) => (o.toLowerCase()==="o"?index:""));
  
  // console.log(boxs);
  // console.log(xInBoxs);
  // console.log(oInBoxs);

  function checkIfWon(arrayOfIndex)
  {
    // wining row 1
    let winRow1 = (arrayOfIndex[0]!==""&&arrayOfIndex[1]!==""&&arrayOfIndex[2]!=="");
    // wining row 2
    let winRow2 = (arrayOfIndex[3]!==""&&arrayOfIndex[4]!==""&&arrayOfIndex[5]!=="");
    // wining row 3
    let winRow3 = (arrayOfIndex[6]!==""&&arrayOfIndex[7]!==""&&arrayOfIndex[8]!=="");
    // wining col 1
    let winCol1 = (arrayOfIndex[0]!==""&&arrayOfIndex[3]!==""&&arrayOfIndex[6]!=="");
    // wining col 2
    let winCol2 = (arrayOfIndex[1]!==""&&arrayOfIndex[4]!==""&&arrayOfIndex[7]!=="");
    // wining col 3
    let winCol3 = (arrayOfIndex[2]!==""&&arrayOfIndex[5]!==""&&arrayOfIndex[8]!=="");
    // wining diag 1
    let winDiag1 = (arrayOfIndex[0]!==""&&arrayOfIndex[4]!==""&&arrayOfIndex[8]!=="");
    // wining diag 2
    let winDiag2 = (arrayOfIndex[2]!==""&&arrayOfIndex[4]!==""&&arrayOfIndex[6]!=="");
    
    return (winRow1||winRow2||winRow3||winCol1||winCol2||winCol3||winDiag1||winDiag2);
  }
  return checkIfWon(xInBoxs)||checkIfWon(oInBoxs);
}

function restartGame()
{
  window.location.reload();
}

