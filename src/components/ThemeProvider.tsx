import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { defaultTheme } from './defaultTheme'

interface Props {
  theme?: { [key: string]: any }
  children: any
}

export const ThemeProvider = ({ children }: Props) => {
  // Legacy theme override to prevent Chakra's defaults from interfering with existing bootstrap, material and custom styles
  // Removing this will give me great joy.
  const legacyTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#F1F1F1",
          fontFamily: "'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif",
        },
        p: {
          marginBottom: '10px',
        }
      },
    },
    // this will get a refactor to conform with the Styled System Theme Spec
    ...defaultTheme,
  })
  return (
    <ChakraProvider theme={legacyTheme}>
      <StyledThemeProvider theme={legacyTheme}>
        {children}
      </StyledThemeProvider>
    </ChakraProvider>
  )
}
