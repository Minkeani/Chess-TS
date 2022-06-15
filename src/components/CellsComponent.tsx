import React, {FC} from 'react'
import {Cell} from '../models/Cell'

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

 const  CellsComponent: FC<CellProps> = ({cell, selected, click}) => {
  return (
    <div className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
    onClick={() => click(cell)}
    style={{background: cell.available && cell.figure ? 'red' : ''}}
    >
        {cell.available && !cell.figure && <div className={'availible'}></div>}
        {cell.figure?.logo && <img src={cell.figure?.logo}/>}
    </div>
  )
}
export default CellsComponent