# Tic-Tac-Toe Game

A simple interactive Tic-Tac-Toe game built with React. This project demonstrates the fundamentals of React, including state management, component structure, and event handling.

## Features

- **Player Turns**: Alternates turns between "X" and "O".
- **Win Detection**: Checks for a winning player after each move.
- **New Game Option**: Resets the board to start a new game.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jonathan4Kim/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the game in your browser at `http://localhost:3000`.

## Code Overview

### `Square` Component

The `Square` component renders each square on the game board. It receives:
- `value`: The square's current value, either "X", "O", or `null`.
- `onSquareClick`: A callback function triggered on square clicks.

### `Board` Component

The `Board` component manages game state and handles logic, including:
- `squares`: An array of 9 elements representing the board.
- `xIsNext`: A boolean to determine the current player ("X" or "O").

Key functions:
- `handleClick(i)`: Manages moves, updating the board and switching turns.
- `calculateWinner(squares)`: Checks if a player has won based on defined winning patterns.
- `newGame()`: Resets the game to the starting state.

## How to Play

1. Click any square to place an "X" or an "O" on the board.
2. The game alternates turns between players and displays whose turn it is.
3. If a player wins, the game displays the winner.
4. Click **New Game** to start over.

## License

This project is open-source and available under the MIT License.