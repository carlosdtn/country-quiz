import { Icons, Images } from './constants.ts'
import ISO from 'iso-3166-1-alpha-2'

export function getIcon(type) {
  if (Icons[type] !== undefined) {
    return Icons[type].url
  }
  return Icons.default.url
}
export function getImage(type) {
  if (Images[type] !== undefined) {
    return Images[type].url
  }
  return Images.default.url
}

export const getFourCountries = (country) => {
  const countries = Object.keys(country).map((key, value) => {
    return {
      id: value,
      code: country[key]?.cca3,
      country: country[key]?.name?.common,
      capital: country[key]?.capital[0]
    }
  })
  const randomCountries = countries.sort(() => Math.random() - 0.5).slice(0, 4)
  return randomCountries
}

export const getFinalAlternatives = (randomData) => {
  const pickRandom =
    randomData[Math.floor(Math.random() * randomData.length)]?.code
  const formattedAlternatives = []
  randomData.forEach((element, index) => {
    formattedAlternatives.push({
      id: index + 1,
      country: element?.country,
      capital: element?.capital,
      answer: element?.code === pickRandom ? 'Correct' : 'Incorrect'
    })
  })
  const capital = formattedAlternatives.find(
    (el) => el?.answer === 'Correct'
  )?.capital
  return { formattedAlternatives, capital }
}

export const convertIndexToLetter = (index) => {
  const CharCode = String.fromCharCode(parseInt(index) + 64)
  return CharCode
}
