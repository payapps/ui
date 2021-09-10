import { DefaultTheme } from 'styled-components'

const baseFont = 16

export const defaultTheme: DefaultTheme = {
  baseFontSize: `${baseFont}px`,
  legacy: {
    colors: {
      hoveredBg: 'rgba(0, 0, 0, 0.2)',
      activeBg: 'rgba(0, 0, 0, 0.1)',
      white: '#FFF',
      darkBlue: '#1F2533',
      blue: '#0D44AA',
      lightBlue: '#007AFF',
      grey: '#5A6E7A',
      bgGray: '#EDEDED',
      pending: '#ff9500',
      green: {
        900: '#39B683',
        100: '#E9F5F0'
      },
      red: '#FF354E',
      gold: {
        900: '#FFBF00',
        400: '#FFF9E6'
      },
      goldAlpha: {
        400: 'rgba(255, 191, 0, 0.4)',
        100: 'rgba(255, 191, 0, 0.1)'
      },
      regGrey: '#6F8593',
      medGrey: '#8EA3B0',
      lightGrey: '#B6C5CE',
      xtraLightGrey: '#F7F7F7',
      tableBG: '#FAFAFA',
      infoBlue: '#F0F9FF',
      toasterGreen: '#E9F5F0',
      errorRed: {
        900: '#FF354E',
        100: '#FEF7F8'
      }
    },
  },
  colors: {
    gold: {
      400: 'hsla(47, 100%, 50%, 1)',
      500: 'hsla(43, 100%, 47%, 1)',
      600: 'hsla(43, 100%, 43%, 1)',
      700: 'hsla(43, 100%, 38%, 1)',
      800: 'hsla(43, 100%, 30%, 1)',
      900: 'hsla(40, 100%, 20%, 1)',
    },
    goldAlpha: {
      50: 'hsla(47, 100%, 50%, 0.1)',
      100: 'hsla(47, 100%, 50%, 0.2)',
      200: 'hsla(47, 100%, 50%, 0.4)',
      300: 'hsla(47, 100%, 50%, 0.6)',
      400: 'hsla(47, 100%, 50%, 0.8)',
    }
  },
  size: (...value: any) =>
    value.reduce((a: string, i: number) => `${a} ${i / baseFont}rem`, '')
}
