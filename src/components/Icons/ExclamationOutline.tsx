import React from 'react'
import { Box } from '@chakra-ui/react'

export const ExclamationOutline = ({ color = 'currentColor' }) => {
  return (
    <Box display="inline-block">
      <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="M8 .25C3.719.25.25 3.75.25 8A7.749 7.749 0 008 15.75c4.25 0 7.75-3.469 7.75-7.75 0-4.25-3.5-7.75-7.75-7.75zm0 14A6.228 6.228 0 011.75 8 6.248 6.248 0 018 1.75c3.438 0 6.25 2.813 6.25 6.25A6.248 6.248 0 018 14.25zM9.313 11A1.32 1.32 0 008 9.687 1.3 1.3 0 006.687 11c0 .75.563 1.313 1.313 1.313A1.3 1.3 0 009.313 11zM6.75 4.406l.219 4.25c0 .188.187.344.375.344h1.281C8.813 9 9 8.844 9 8.656l.219-4.25c0-.218-.156-.406-.375-.406H7.125c-.219 0-.375.188-.375.406z"
        fill={ color }
      />
      </svg>
    </Box>
  )
}
