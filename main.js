// Create an object for all the dom elements
const $els = {
  container: document.querySelector('.container'),
  rock: document.querySelector('.rock'),
  paper: document.querySelector('.paper'),
  scissors: document.querySelector('.scissors'),
  winner: document.querySelector('.winner'),
  player1: document.querySelector('.player1'),
  player2: document.querySelector('.player2'),
  button: document.querySelector('button'),
};
// declare global variables to store the state of the game
// an array to keep the player choices and two variables to track the
// wins and losses of the players
const choices = [];
let player1Wins = 0;
let player2Wins = 0;

// implement the basic logic of rock paper scissors: given two
// choices return the winning choice according to the rules.
function compare(choice1, choice2) {
  if (choice1 === choice2) {
    return 'The result is a tie!';
  }
  if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      return 'rock';
    }
    return 'paper';
  }
  if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      return 'paper';
    }
    return 'scissors';
  }
  if (choice1 === 'scissors') {
    if (choice2 === 'rock') {
      return 'rock';
    }
    return 'scissors';
  }
  return true;
}


// create function that keeps track of the ammount fo wins for each player
function addWin() {
  if (choices[0] === choices[1]) return;
  const winner = compare(choices[0], choices[1]);
  (winner === choices[0]) ? player1Wins += 1 : player2Wins += 1;
  $els.player1.textContent = player1Wins;
  $els.player2.textContent = player2Wins;
}

// create a function that will handle the click events. The function will check
// to see what the user clicks, pushes it into an array
function checkChoiceAndCompare(e) {
  if (e.target.classList[0] !== 'rock' &&
      e.target.classList[0] !== 'paper' &&
      e.target.classList[0] !== 'scissors') return;
  choices.push(e.target.classList[0]);
  e.target.style.backgroundColor = 'lightpink';
  if (choices.length === 2) {
    const choice1 = choices[0];
    const choice2 = choices[1];
    choices[0] === choices[1] ? $els.winner.textContent = `It's a tie!` :
    $els.winner.textContent = `${compare(choice1, choice2)} wins!`;
    $els.container.removeEventListener('click', checkChoiceAndCompare);
    addWin();
  }
}


function reset() {
  choices.splice(0, 2);
  $els.rock.style.backgroundColor = 'goldenrod';
  $els.paper.style.backgroundColor = 'goldenrod';
  $els.scissors.style.backgroundColor = 'goldenrod';
  $els.winner.textContent = '';
  $els.container.addEventListener('click', checkChoiceAndCompare);
}

$els.button.addEventListener('click', reset);
$els.container.addEventListener('click', checkChoiceAndCompare);
