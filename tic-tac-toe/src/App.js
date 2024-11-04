import './App.css';
import {useState} from 'react';

function Square({value, onSquareClick}) {
  return <button onClick={onSquareClick} className="square">{value}</button>;
}


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  function newGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    winner = "Next Player: " + (xIsNext ? "X" : "O");
  }


  let status;
  if (winner) {
    status = "winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
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
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (<>
    <div className='status'>{status}</div>
    <div>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
    </div>
    <div>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
    </div>
    <div>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
      <Square value={squares[7]} onSquareClick={() => handleClfick(7)}></Square>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
    </div>
    <div>
      <button className='newGame' onClick={() => newGame()}>New Game</button>
    </div>
  </>
);
}
