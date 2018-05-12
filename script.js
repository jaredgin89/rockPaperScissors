let cChoice = 0;
let pChoice = 0;
let match = 0;
let pWins = 0;
let cWins = 0;

function playerChoice(input) {
  if(input == "rock") {
    document.getElementById("playerChoice").innerHTML = "Rock";
    pChoice = "r";
  }
  else if(input == "paper") {
    document.getElementById("playerChoice").innerHTML = "Paper";
    pChoice = "p";
  }
  else if(input == "scissors") {
    document.getElementById("playerChoice").innerHTML = "Scissors";
    pChoice = "s";
  }
  compChoice();
}

function compChoice() {
  let comp = Math.floor(Math.random()*3);
  if(comp == "0") {
    document.getElementById("compChoice").innerHTML = "Rock";
    cChoice = "r";
  }
  else if(comp == "1") {
    document.getElementById("compChoice").innerHTML = "Paper";
    cChoice = "p";
  }
  else if(comp == "2") {
    document.getElementById("compChoice").innerHTML = "Scissors";
    cChoice = "s";
  }
  roundWinner(pChoice, cChoice);
}

function roundWinner(pChoice, cChoice) {
  let round = pChoice + cChoice;
  if(round == "rr" || round == "pp" || round == "ss")
    document.getElementById("results").innerHTML = "Tie";
  else if(round == "sp" || round == "pr" || round == "rs")
  {
    document.getElementById("results").innerHTML = "Player Wins";
    pWins += 1;
    document.getElementById("yourScore").innerHTML = pWins;
  }
  else if(round == "ps" || round == "rp" || round == "sr")
  {
    document.getElementById("results").innerHTML = "Computer Wins";
    cWins += 1;
    document.getElementById("compScore").innerHTML = cWins;
  }
  gameMatch();
}

function gameMatch() {
  document.getElementById("match").innerHTML = "Match: " + ++match;
  if(pWins > 4 || cWins > 4)
    winner();
}

function winner() {
  if(pWins < cWins)
    alert('Player loses! Score: ' + pWins + ' to ' + cWins + '.');
  else
    alert('Player wins! Score: ' + pWins + ' to ' + cWins + '.');
  reset();
}

function reset() {
  document.getElementById("match").innerHTML = "Match: " + 0;
  document.getElementById("yourScore").innerHTML = 0;
  document.getElementById("compScore").innerHTML = 0;
  document.getElementById("compChoice").innerHTML = " ";
  document.getElementById("playerChoice").innerHTML = " ";
  document.getElementById("results").innerHTML = " ";
  pWins = 0;
  cWins = 0;
  match = 0;
}
