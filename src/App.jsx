import { useEffect, useState } from 'react'
import CardQuestion from './components/CardQuestion'
import ButtonAnswer from './components/ButtonAnswer'
import CustomIcon from './components/CustomIcon'
import useAllCountries from './hooks/useAllCountries'
import './App.less'

function App() {
  const { formattedAlternatives, capital, isLoading } = useAllCountries()
  //const [isCorrect, setIsCorrect] = useState(false)
  const [index, setIndex] = useState(null)

  const handleResponse = (res) => {
    if (res?.answer === 'Correct') {
      //setIsCorrect(true)
      setIndex(res.id)
      console.log('Correct')
    } else {
      //setIsCorrect(false)
      setIndex(null)
      console.log('Incorrect')
    }
  }

  return (
    <div className="App">
      <div className="App__container">
        <div className="App__title--left">
          <span className="App__title">COUNTRY QUIZ</span>
        </div>
        <CustomIcon className="svg-port" type="ic_port" />
        <CardQuestion name={`${capital} is the capital of`}>
          {formattedAlternatives.map((countries, values) => (
            <ButtonAnswer
              key={values}
              number={countries.id}
              className={`${index === countries.id ? 'option--correct' : ''}`}
              onClick={() => !isLoading && handleResponse(countries)}
            >
              {countries.country}
            </ButtonAnswer>
          ))}
        </CardQuestion>
      </div>
    </div>
  )
}

export default App
