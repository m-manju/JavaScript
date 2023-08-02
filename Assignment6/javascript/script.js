const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
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

    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
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
  currentPlayer = X_TEXT;

  boxes.forEach(box => box.addEventListener('click', boxClicked));
}

startGame();

