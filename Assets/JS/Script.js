
let humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  displayResult(playerChoice, computerChoice);

  // Update scores
  document.getElementById('human-score').textContent = humanScore;
  document.getElementById('computer-score').textContent = computerScore;

  // Save scores to local storage
  localStorage.setItem('humanScore', humanScore);
  localStorage.setItem('computerScore', computerScore);
}

function displayResult(playerChoice, computerChoice) {
  // const resultElement = document.getElementById('resultElement');
  const game = document.getElementById('game');
  document.getElementById('next-button').style.display = 'none'
  // resultElement.style.display = 'none';

  if (playerChoice === computerChoice) {
    alert('Its TIEUP');
    
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
    
  ) {
    humanScore = humanScore + 1;
    alert('You win!');
  } else {
    alert('You Lost!');
    computerScore = computerScore + 1;
  }
  if(humanScore>computerScore){
    document.getElementById('next-button').style.display = 'inline'
  }
}

function showRules() {
  document.getElementById('rules-board').style.display = 'inline';
}

function closeRules() {
  document.getElementById('rules-board').style.display = 'none';
}

