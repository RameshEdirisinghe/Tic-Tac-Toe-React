import React, { useState } from 'react';
import '../TicTacToe/TicTacToe.css';
import circle from '../Assets/circle.png';
import cross from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [board, setBoard] = useState(data);

  const toggle = (e, num) => {
    
    if (lock || board[num] !== "") {
      return; 
    }
    const newBoard = [...board]; 

    if (count % 2 === 0) {
      newBoard[num] = "X"; 
      e.target.innerHTML = `<img src='${cross}' alt='cross' />`;
    } else {
      newBoard[num] = "O";
      e.target.innerHTML = `<img src='${circle}' alt='circle' />`;
    }

    setBoard(newBoard);
    setCount(count + 1);
    setTimeout(checkWin, 100);
  };

  const checkWin = () => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        won(board[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    alert(`congratulations Player ${winner} wins!`);
  };

  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
    document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
  };

  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe Game with <span> React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='box' onClick={(e) => { toggle(e, 0) }}></div>
          <div className='box' onClick={(e) => { toggle(e, 1) }}></div>
          <div className='box' onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className='row2'>
          <div className='box' onClick={(e) => { toggle(e, 3) }}></div>
          <div className='box' onClick={(e) => { toggle(e, 4) }}></div>
          <div className='box' onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className='row3'>
          <div className='box' onClick={(e) => { toggle(e, 6) }}></div>
          <div className='box' onClick={(e) => { toggle(e, 7) }}></div>
          <div className='box' onClick={(e) => { toggle(e, 8) }}></div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
