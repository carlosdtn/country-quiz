import { useEffect, useState } from 'react'
import {
  getFourCountries,
  getFinalAlternatives
} from '../utilities/functions.js'
import { baseURL } from '../utilities/constants.ts'

export default function useAllCountries() {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${baseURL}/region/europe`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setCountry(data)
      })
  }, [])

  const data = getFourCountries(country)
  const { formattedAlternatives, capital } = getFinalAlternatives(data)

  return { formattedAlternatives, capital, isLoading }
}
