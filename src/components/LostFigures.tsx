import React, {FC} from 'react'
import {Figure} from "../models/figuers/Figure";

interface LostFigures {
    title: String;
    figures: Figure[]
}

const LostFigures: FC<LostFigures> = ({title, figures}) => {
  return (
    <div className='lost'>
      <h3>{title}</h3>
      {figures.map(figure => 
        <div key={figure.id}>
            {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt='logo'/>}
        </div>
        )}
    </div>
  )
}

export default LostFigures