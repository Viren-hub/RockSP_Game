function rulesBoard() {
  let element = document.getElementById("rules-board");
  element.classList.toggle("hide-rules");
}

function playAgain() {  
  let element = document.getElementById("game-result");
  element.classList.add("hide-rules");
  let game = document.getElementById("game");
  game.classList.remove("game-hide");
}

function userSelected(e) {
  let element = document.getElementById("game");
  element.classList.add("game-hide");
  let gameResultDiv = document.getElementById("game-result");
  gameResultDiv.classList.add('game-result-show');
  let user = e;

  let choices = ['rock', 'paper', 'scissors'];
  let pcSelected = choices[Math.floor(Math.random() * 3)];

  let result = ''

  if (user === pcSelected) {
    result = 'TIE UP';
  } else if (
    (user === 'rock' && pcSelected === 'scissors') ||
    (user === 'paper' && pcSelected === 'rock') ||
    (user === 'scissors' && pcSelected === 'paper')
  ) {

    result = 'YOU WIN';
  } else {
    result = 'YOU LOST';
  }
  document.getElementById('resultShow').innerHTML = result;
}


