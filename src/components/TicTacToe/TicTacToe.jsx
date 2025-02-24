import React from 'react'
import '../TicTacToe/TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'


const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe Game with  <span> React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div> 
        </div>
        <div className='row2'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div> 
        </div>
        <div className='row3'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div> 
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe

