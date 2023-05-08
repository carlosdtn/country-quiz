export const baseURL: string = 'https://restcountries.com/v3.1'

export const mediaPath: MediaPath = {
  PATH_ICONS: `/icons/`,
  PATH_IMG: `/images/`
}
export const Icons: Icon = {
  ic_port: {
    url: `${mediaPath.PATH_ICONS}ic_port.svg`
  },
  ic_checkCircle: { url: `${mediaPath.PATH_ICONS}ic_checkCircle.svg` }
}
export const Images: Image = {
  img_carrusel_1: {
    url: `${mediaPath.PATH_IMG}string`
  }
}

export interface MediaPath {
  PATH_ICONS: string
  PATH_IMG: string
}

export interface Icon {
  [key: string]: {
    url: string
  }
}

export interface Image {
  [key: string]: {
    url: string
  }
}
