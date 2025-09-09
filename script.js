
    const board = document.getElementById("board");
    const winnerDisplay = document.getElementById("winner");
    let currentPlayer = "X";
    let cells = Array(9).fill(null);

    // Create 9 cells
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
    }

    function handleClick(e) {
      const index = e.target.dataset.index;

    if (cells[index] || checkWinner()) return;

    cells[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        winnerDisplay.textContent = `${currentPlayer} Wins! 🎉`;
    return;
      }

      if (cells.every(cell => cell)) {
        winnerDisplay.textContent = "It's a Draw!";
    return;
      }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWinner() {
      const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
    ];

      return winPatterns.some(pattern => {
        const [a,b,c] = pattern;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
      });
    }

    function resetGame() {
        cells.fill(null);
      document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    winnerDisplay.textContent = "";
    }
