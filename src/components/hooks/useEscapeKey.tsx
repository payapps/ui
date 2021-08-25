import { useEffect } from 'react'

export const useEscapeKey = (callback: () => void) => {
  const handler = ({ key }) => (key === 'Escape' ? callback() : false)
  useEffect(() => {
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  })
}
