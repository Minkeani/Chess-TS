import React, {FC, useEffect} from 'react'
import { useState } from 'react';
import { Board } from '../models/Board'
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import CellsComponent from './CellsComponent'

interface PropsBoard {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const  BoardComponents: FC<PropsBoard>=({board, setBoard, swapPlayer, currentPlayer}) =>{

  function click(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else  {
      if(cell.figure?.color === currentPlayer?.color)
        setSelectedCell(cell)
    }
    
  }

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div>
    <h3>Ходит {currentPlayer?.color}</h3>
     <div className='board'>
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
            {row.map(cell => 
              <CellsComponent
                click={click}
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
              )}
        </React.Fragment>
      )}
    </div>
    </div>
   
  )
}
export default BoardComponents