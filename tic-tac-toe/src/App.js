import './App.css';
import {useState} from 'react';

function Square({value, onSquareClick}) {
  return <button onClick={onSquareClick} className="square">{value}</button>;
}


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (<>
    <div>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
      <Square value={squares[1]}></Square>
      <Square value={squares[2]}></Square>
    </div>
    <div>
      <Square value={squares[3]}></Square>
      <Square value={squares[4]}></Square>
      <Square value={squares[5]}></Square>
    </div>
    <div>
      <Square value={squares[6]}></Square>
      <Square value={squares[7]}></Square>
      <Square value={squares[8]}></Square>
    </div>
  </>
);
}
