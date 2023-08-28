function getInputValue(){
  
const player2 = document.getElementById('player1').value;
const player1 = document.getElementById('player2').value;
console.log(player1);
let currentPlayer = player1;
let spaces = Array(9).fill(null);
const boxes = Array.from(document.getElementsByClassName("box"));

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon(currentPlayer)) {

      let heading = `${currentPlayer} has won!`;
      let winningBlocks = playerHasWon(currentPlayer);
      winningBlocks.forEach(box => boxes[box].style.backgroundColor = "lightgreen");
      document.getElementById('heading').innerText = heading;
      boxes.forEach(box => box.removeEventListener('click', boxClicked));

    } else if (!spaces.includes(null)) {
      document.getElementById('heading').innerText = "It's a draw!";
    }

    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function playerHasWon(player) {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;
    if (spaces[a] === player && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

const restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener('click', restart);

function restart() {
  spaces.fill(null);
  boxes.forEach(box => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });

  document.getElementById('heading').innerText = "Tic Tac Toe";
  currentPlayer = player1;

  boxes.forEach(box => box.addEventListener('click', boxClicked));
}

startGame();



}