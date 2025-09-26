
import {useState } from 'react'
import './App.css'
import {Square} from './components/Square.jsx'
import {TURNS} from './constants.js'
import { checkWinnerFrom, checkEndGame} from './logic/board.js'
import {saveGameToStorage, resetGameStorage} from './logic/storage/index.js'

import { WinnerModal } from './components/WinnerModal.jsx'

function App() {
  
  const [board, setBoard] = useState( () =>{
   const boardFromStorage = window.localStorage.getItem('board')
   return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
   }
  )
  
  const [winner, setWinner] = useState(null)

  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('item')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }
  
  const updateBoard = (index) =>{
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    console.log(newTurn)
    setTurn(newTurn)
    

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }


  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Empezar De Nuevo</button>
      <section className="game"> 
      
        {
          board.map((_  , index) => {
            return(
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
               {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
