
let userScore = parseInt(localStorage.getItem('humanScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
let computerChooseImages = ''
let userChooseImage = ''

function play(playerChoice) {
  userChooseImage = playerChoice;
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChooseImages = computerChoice ;
  switch(userChooseImage) {
    case 'rock':
      userChooseImage = './Assets/Images/icon-3.png'
      break;
    case 'paper':
      userChooseImage = './Assets/Images/icon-1.png'
      break;
    default:
      userChooseImage = './Assets/Images/icon-2.png'
  }
  switch(computerChooseImages) {
    case 'rock':
      computerChooseImages = './Assets/Images/icon-3.png'
      break;
    case 'paper':
      computerChooseImages = './Assets/Images/icon-1.png'
      break;
    default:
      computerChooseImages = './Assets/Images/icon-2.png'
  }

  displayResult(playerChoice, computerChoice);
  showResult(userChooseImage, computerChooseImages)
  document.getElementById('human-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;

  localStorage.setItem('userScore', userScore);
  localStorage.setItem('computerScore', computerScore);
}

function displayResult(playerChoice, computerChoice) {
  const game = document.getElementById('game');
  document.getElementById('next-button').style.display = 'none'

  if (playerChoice === computerChoice) {
    alert('Its TIEUP');
    
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
    
  ) {
    userScore = userScore + 1;
    alert('You win!');
  } else {
    alert('You Lost!');
    computerScore = computerScore + 1;
  }
  if(userScore>computerScore){
    document.getElementById('next-button').style.display = 'inline'
  }
}
function showResult(userImag, computerImg){
  document.getElementById('game').style.display = 'none';
  document.getElementById('resultElement').style.display = 'flex';
  document.getElementById('userimg').src=userImag;
  document.getElementById('computerImg').src=computerImg;
  
}
function showRules() {
  document.getElementById('rules-board').style.display = 'inline';
}
function playAgain(){
  document.getElementById('game').style.display = 'inline';
  document.getElementById('resultElement').style.display = 'none';
}
function closeRules() {
  document.getElementById('rules-board').style.display = 'none';
}

