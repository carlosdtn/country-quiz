import { Icons, Images, Icon, Image } from './constants'
import { Country } from '../interfaces/country'

export function getIcon(type: keyof Icon) {
  if (Icons[type] !== undefined) {
    return Icons[type].url
  }
  return Icons.default.url
}
export function getImage(type: keyof Image) {
  if (Images[type] !== undefined) {
    return Images[type].url
  }
  return Images.default.url
}

export const convertIndexToLetter = (index: string) => {
  const CharCode = String.fromCharCode(parseInt(index) + 64)
  return CharCode
}

export const verifyCapital = (
  countries: Array<CountryGroup[]>,
  page: number
) => {
  const capital = countries[page]?.find((item) => item.answer === 'Correct')
  return capital?.capital
}

export const getFourCountries = (country: Country[]) => {
  const countries = Object.entries(country).map(([key, value]) => {
    const countryBase: CountryBase = {
      id: parseInt(key),
      code: value?.cca3,
      country: value?.name.common,
      capital: value?.capital[0],
      flag: value?.flags.png
    }
    return countryBase
  })
  const groupedCountries = []
  const validateMulplesOfFour: number =
    countries.length - (countries.length % 4)

  for (let i = 0; i < validateMulplesOfFour; i += 4) {
    const group = countries.slice(i, i + 4)
    groupedCountries.push(group)
  }
  return groupedCountries
}

export const getFinalAlternatives = (randomData: Array<CountryBase[]>) => {
  const formattedAlternatives: CountryAlternative[] = []
  const groupedAlternatives = []
  for (let i = 0; i < randomData.length; i++) {
    const pickRandom: string = randomData[i][Math.floor(Math.random() * 4)].code
    for (let j = 0; j < randomData[i].length; j++) {
      formattedAlternatives.push({
        id: j + 1,
        country: randomData[i][j]?.country,
        capital: randomData[i][j]?.capital,
        flag: randomData[i][j]?.flag,
        answer: randomData[i][j]?.code === pickRandom ? 'Correct' : 'Incorrect'
      })
    }
  }
  for (let i = 0; i < formattedAlternatives.length; i += 4) {
    const group = formattedAlternatives.slice(i, i + 4)
    groupedAlternatives.push(group)
  }
  return { groupedAlternatives }
}

interface CountryBase {
  id: number
  code: string
  country: string
  capital: string
  flag: string
}

interface CountryAlternative {
  id: number
  country: string
  capital: string
  flag: string
  answer: string
}

interface CountryGroup {
  id: number
  code: string
  country: string
  capital: string
  flag: string
  answer: string
}
