import 'styled-components'

type ColorIndex = 100 | 400 | 900
type FromColorIndex = { [key in ColorIndex]?: string} | string
declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: string
    colors: {
      hoveredBg: FromColorIndex
      activeBg: FromColorIndex
      white: FromColorIndex
      darkBlue: FromColorIndex
      blue: FromColorIndex
      lightBlue: FromColorIndex
      grey: FromColorIndex
      pending: FromColorIndex
      green: FromColorIndex
      red: FromColorIndex
      regGrey: FromColorIndex
      medGrey: FromColorIndex
      lightGrey: FromColorIndex
      xtraLightGrey: FromColorIndex
      tableBG: FromColorIndex
      infoBlue: FromColorIndex
      toasterGreen: FromColorIndex
      errorRed: FromColorIndex
      gold: FromColorIndex
      goldAlpha: FromColorIndex
    },
    legacy: {
      colors: {
        gray: FromColorIndex
      }
    }
    size: (...val: any[]) => string
  }
}
