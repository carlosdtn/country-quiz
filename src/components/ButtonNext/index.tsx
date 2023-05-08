import './index.less'

interface ButtonNextProps {
  onClick?: React.MouseEventHandler
  visibleState: boolean
}

const ButtonNext = ({ onClick, visibleState }: ButtonNextProps) => {
  return (
    <div className="button--container">
      {visibleState && (
        <>
          <button className="button--next" onClick={onClick}>
            Next
          </button>
        </>
      )}
    </div>
  )
}

export default ButtonNext
