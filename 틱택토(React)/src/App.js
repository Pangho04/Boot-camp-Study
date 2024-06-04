import { useState } from "react";

function Square({ value, onSquareClick, style }) {
  return (
    <button className="square" onClick={onSquareClick} style={style} >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(i)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + squares[winner[0]];
  } else if (squares[8] && !winner) {
    status = 'No one win...';
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function makeBoard() {
    const makeRows = [];
    for (let i = 0; i < 9; i += 3) {
      const makeSquares = [];
      makeRows.push(<div key={i} className="board-row">{makeSquares}</div>);

      for (let j = i; j < i + 3; j++) {
        let squareStyle = {};

        if (winner && winner.includes(j)) {
          squareStyle = { backgroundColor: "red" }
        }
        makeSquares.push(
          <Square
            key={j}
            value={squares[j]}
            onSquareClick={() => handleClick(j)}
            style={squareStyle}
          />
        );
      }
    }
    return makeRows;
  }

  return (
    <>
      <div className="status">{status}</div>
      {makeBoard()}
    </>
  );
}
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [lineUp, setLineUp] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  function moveList() {
    if (lineUp) {
      return history.map((squares, move) => {
        let description;

        if (move > 0 && move < 4) {
          description = 'Go to move #' + move + `(row: 1, collum:${currentSquares})`;
          console.log(history)
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });
    } else {
      const reversedHistory = [...history].reverse();

      return reversedHistory.map((squares, move) => {
        const reversedMove = history.length - 1 - move;
        let description;
        if (reversedMove > 0) {
          description = 'Go to move #' + reversedMove;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(reversedMove)}>{description}</button>
          </li>
        );
      });
    }
  }

  function linedUp() {
    setLineUp(!lineUp);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>
          Your turn Now: #{currentMove}
        </div>
        <ol className="timeMachine">
          <button onClick={linedUp}>
            ↑↓
          </button>
          {moveList()}
        </ol>
      </div>
    </div>
  )

}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}