import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: string
    colors: {
      hoveredBg: string
      activeBg: string
      white: string
      darkBlue: string
      blue: string
      lightBlue: string
      grey: string
      pending: string
      green: string
      red: string
      regGrey: string
      medGrey: string
      lightGrey: string
      xtraLightGrey: string
      tableBG: string
      infoBlue: string
      toasterGreen: string
      errorRed: string
      gold: {
        900: string
        400: string
      }
      goldAlpha: {
        400: string
        100: string
      }
    }
    size: (...val: any[]) => string
  }
}
