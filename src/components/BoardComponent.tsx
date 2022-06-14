import React, {FC} from 'react'
import { useState } from 'react';
import { Board } from '../models/Board'
import { Cell } from '../models/Cell';
import CellsComponent from './CellsComponent'

interface PropsBoard {
  board: Board;
  setBoard: (board: Board) => void
}

const  BoardComponents: FC<PropsBoard>=({board, setBoard}) =>{

  function click(cell: Cell) {
    setSelectedCell(cell)
  }

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  return (
    <div className='board'>
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
            {row.map(cell => 
              <CellsComponent
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
              )}
        </React.Fragment>
      )}
    </div>
  )
}
export default BoardComponents