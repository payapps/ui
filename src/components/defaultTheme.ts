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
      400: '#FFC700',
      500: '#EEAB00',
      600: '#D99C00',
      700: '#C28C00',
      800: '#976D00',
      900: '#644200',
    },
    goldAlpha: {
      50: 'rgba(255, 199, 0, 0.1)',
      100: 'rgba(255, 199, 0, 0.2)',
      200: 'rgba(255, 199, 0, 0.4)',
      300: 'rgba(255, 199, 0, 0.6)',
      400: 'rgba(255, 199, 0, 0.8)',
    },
    aqua: {
      400: '#00E2F0',
      500: '#00CCD9',
      600: '#00B4BF',
      700: '#009EA8',
      800: '#008890',
      900: '#004E53',
    },
    aquaAlpha: {
      50: 'rgba(0, 226, 240, 0.1)',
      100: 'rgba(0, 226, 240, 0.2)',
      200: 'rgba(0, 226, 240, 0.4)',
      300: 'rgba(0, 226, 240, 0.6)',
      400: 'rgba(0, 226, 240, 0.8)',
    },
    purple: {
      400: '#9C29F6',
      500: '#8924D9',
      600: '#7A23BF',
      700: '#671EA0',
      800: '#541982',
      900: '#3B105C',
    },
    purpleAlpha: {
      50: 'rgba(156, 41, 246, 0.1)',
      100: 'rgba(156, 41, 246, 0.2)',
      200: 'rgba(156, 41, 246, 0.4)',
      300: 'rgba(156, 41, 246, 0.6)',
      400: 'rgba(156, 41, 246, 0.8)',
    },
    green: {
      400: '#00DA64',
      500: '#00BE57',
      600: '#00AD4F',
      700: '#009243',
      800: '#007A38',
      900: '#004A22',
    },
    greenAlpha: {
      50: 'rgba(0, 218, 100, 0.1)',
      100: 'rgba(0, 218, 100, 0.2)',
      200: 'rgba(0, 218, 100, 0.4)',
      300: 'rgba(0, 218, 100, 0.6)',
      400: 'rgba(0, 218, 100, 0.8)',
    },
    orange: {
      400: '#F96721',
      500: '#E95913',
      600: '#CF4F10',
      700: '#BA4810',
      800: '#AC3900',
      900: '#6C2400',
    },
    orangeAlpha: {
      50: 'rgba(249, 103, 33, 0.1)',
      100: 'rgba(249, 103, 33, 0.2)',
      200: 'rgba(249, 103, 33, 0.4)',
      300: 'rgba(249, 103, 33, 0.6)',
      400: 'rgba(249, 103, 33, 0.8)',
    },
    red: {
      400: '#FF1A51',
      500: '#E41849',
      600: '#C1153E',
      700: '#A81236',
      800: '#90102F',
      900: '#5C0C1F',
    },
    redAlpha: {
      50: 'rgba(255, 26, 81, 0.1)',
      100: 'rgba(255, 26, 81, 0.2)',
      200: 'rgba(255, 26, 81, 0.4)',
      300: 'rgba(255, 26, 81, 0.6)',
      400: 'rgba(255, 26, 81, 0.8)',
    },
    blue: {
      400: '#007AFF',
      500: '#0066EB',
      600: '#0052D7',
      700: '#003EC3',
      800: '#0A2AAF',
      900: '#000287',
    },
    blueAlpha: {
      50: 'rgba(0, 122, 255, 0.1)',
      100: 'rgba(0, 122, 255, 0.2)',
      200: 'rgba(0, 122, 255, 0.4)',
      300: 'rgba(0, 122, 255, 0.6)',
      400: 'rgba(0, 122, 255, 0.8)',
    },

  },
  size: (...value: any) =>
    value.reduce((a: string, i: number) => `${a} ${i / baseFont}rem`, '')
}
