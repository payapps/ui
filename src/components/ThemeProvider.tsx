import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme } from './defaultTheme'

interface Props {
  theme?: { [key: string]: any }
  children: any
}

export const ThemeProvider = ({ theme = {}, children }: Props) => {
  const composedTheme = { ...theme, ...defaultTheme }
  return (
    <StyledThemeProvider theme={composedTheme}>{children}</StyledThemeProvider>
  )
}
