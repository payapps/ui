import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { defaultTheme } from './defaultTheme'

interface Props {
  theme?: { [key: string]: any }
  children: any
}

export const ThemeProvider = ({ theme = {}, children }: Props) => {
  const composedTheme = { ...theme, ...defaultTheme }
  const extendedTheme = extendTheme(composedTheme)
  return (
    <ChakraProvider theme={extendedTheme}>
      <StyledThemeProvider theme={composedTheme}>
        {children}
      </StyledThemeProvider>
    </ChakraProvider>
  )
}
