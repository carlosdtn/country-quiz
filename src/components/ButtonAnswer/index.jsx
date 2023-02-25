import './index.less'
import { useState } from 'react'
import { convertIndexToLetter } from '../../utilities/functions'

const ButtonAnswer = ({ children, onClick, className, number }) => {
  // ${isCorrect ? 'option--correct' : ''}
  return (
    <button type="button" className={`option ${className}`} onClick={onClick}>
      <div className="option__letter">
        <span>{convertIndexToLetter(number)}</span>
      </div>
      <div className="option__box">
        <p>{children}</p>
      </div>
    </button>
  )
}

export default ButtonAnswer
