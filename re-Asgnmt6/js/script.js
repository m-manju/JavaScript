function getInputValue(){
  let player1 = document.getElementById('player1').value;
  let player2 = document.getElementById('player2').value;
  console.log('player1',player1);
  console.log('player2',player2);

  let currentPlayer = player1;
  let empty = Array(9).fill(null);
  const boxes = Array.from(document.getElementsByClassName("box"));
  const gameStart = () => {
      boxes.forEach(box => box.addEventListener('click', boxClicked));
  }
  
  function boxClicked(e) {
      const id = e.target.id;
      if (!empty[id]) {
          empty[id] = currentPlayer;
          e.target.innerText = currentPlayer;
          if (theWinner(currentPlayer)) {
              let heading = `${currentPlayer} has won!`;
              document.querySelector('.heading').innerText = heading;
              boxes.forEach(box => box.removeEventListener('click', boxClicked));
          } else if (!empty.includes(null)) {
              document.querySelector('.heading').innerText = "XO DRAW!"
          }
          currentPlayer = currentPlayer === player1 ? player2 : player1;
      }
  }
  function theWinner(player) {
      for (const conditions of winnerCombos) {
          let [a, b, c] = conditions;
          if (empty[a] === player && empty[a] === empty[b] && empty[a] === empty[c]) {
              return [a, b, c];
          }
      }
      return false;
  }
  const winnerCombos = [[0, 1, 2], [3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]; 
  
  const refreshButton = document.querySelector('.refreshBtn');
  refreshButton.addEventListener('click',refreshing);
  
  function refreshing() {
      empty =Array(9).fill(null);
      currentPlayer =player1;
      document.querySelector('.heading').innerText = 'Tic Tac Toe';
      boxes.forEach(box => {
          box.innerText = "";
          box.addEventListener('click',boxClicked);
      });
  }
  
  gameStart();
}