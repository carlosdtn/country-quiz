import { useEffect, useState } from 'react'
import {
  getFinalAlternatives,
  getFourCountries
} from '../utilities/functions.ts'
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

  const groupQuestion = getFourCountries(country)
  const { groupedAlternatives } = getFinalAlternatives(groupQuestion)

  return { groupedAlternatives, isLoading }
}
