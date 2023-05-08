export interface Country {
  altSpellings: string[]
  area: number
  borders: string[]
  capital: string[]
  capitalInfo: {
    latIng: number[]
  }
  car: {
    side: string
    sign: string[]
  }
  cca2: string
  cca3: string
  ccn3: string
  coatOfArms: {
    png: string
    svg: string
  }
  continents: string[]
  currency: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  demonyms: {
    eng: {
      f: string
      m: string
    }
    fra: {
      f: string
      m: string
    }
  }
  fifa: string
  flag: string
  flags: {
    png: string
    svg: string
  }
  idd: {
    root: string
    suffixes: string[]
  }
  independent: boolean
  languages: {
    [key: string]: string
  }
  latIng: number[]
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  name: {
    common: string
    nativeName: {
      [key: string]: {
        common: string
        official: string
      }
    }
    official: string
  }
  population: number
  region: string
  startOfWeek: string
  status: string
  subregion: string
  timezones: string[]
  tld: string[]
  translations: {
    [key: string]: {
      official: string
      common: string
    }
  }
  unMember: boolean
}
