import './index.less'

const CardQuestion = ({ name, children }) => {
  return (
    <div className="card">
      <div className="card__question">
        <h1 className="card__question--text">{name}</h1>
      </div>
      <div className="card__options">{children}</div>
    </div>
  )
}

export default CardQuestion
