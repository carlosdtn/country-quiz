import './index.less'
import ButtonNext from '../ButtonNext'

interface CardQuestionProps {
  name: string
  children: React.ReactNode
  visibleState: boolean
  setVisibleState: React.Dispatch<React.SetStateAction<boolean>>
}

const CardQuestion = ({
  name,
  children,
  visibleState,
  setVisibleState
}: CardQuestionProps) => {
  return (
    <div className="card">
      <div className="card__question">
        <h1 className="card__question--text">{name}</h1>
      </div>
      <div className="card__options">{children}</div>
      <ButtonNext
        visibleState={visibleState}
        onClick={() => setVisibleState(false)}
      />
    </div>
  )
}

export default CardQuestion
