import './index.less'
import { useState } from 'react'
import CustomIcon from '../CustomIcon'
import { convertIndexToLetter } from '../../utilities/functions'

interface ButtonAnswerProps {
  children: React.ReactNode
  onClick: React.MouseEventHandler
  className?: string
  number: string
}

const ButtonAnswer = ({
  children,
  onClick,
  className,
  number
}: ButtonAnswerProps) => {
  // ${isCorrect ? 'option--correct' : ''}
  return (
    <button
      type="button"
      className={`option ${
        className === 'option--correct' ? 'option--correct' : 'option--hover'
      }`}
      onClick={onClick}
      disable={className === 'option--correct' ? true : false}
    >
      <div className="option__letter">
        <span>{convertIndexToLetter(number)}</span>
      </div>
      <div className="option__box">
        <span>{children}</span>
      </div>
      <div className="option__icon">
        {className === 'option--correct' && (
          <CustomIcon className="svg-check" type="ic_checkCircle" />
        )}
      </div>
    </button>
  )
}

export default ButtonAnswer
