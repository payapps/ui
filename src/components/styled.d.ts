import 'styled-components'

type ColorIndex = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type FromColorIndex = { [key in ColorIndex]?: string} | string
declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: string
    legacy: {
      colors: {
        hoveredBg: FromColorIndex
        activeBg: FromColorIndex
        white: FromColorIndex
        darkBlue: FromColorIndex
        blue: FromColorIndex
        lightBlue: FromColorIndex
        grey: FromColorIndex
        bgGray: FromColorIndex
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
    },
    colors: {
      gold: FromColorIndex
      goldAlpha: FromColorIndex
      aqua: FromColorIndex
      aquaAlpha: FromColorIndex
      purple: FromColorIndex
      purpleAlpha: FromColorIndex
      green: FromColorIndex
      greenAlpha: FromColorIndex
      orange: FromColorIndex
      orangeAlpha: FromColorIndex
      red: FromColorIndex
      redAlpha: FromColorIndex
      blue: FromColorIndex
      blueAlpha: FromColorIndex
    }
  size: (...val: any[]) => string
  }
}
