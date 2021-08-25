import { useEffect } from 'react'

export const useClickOutside = (
  refToElement: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  const clickHandler = ({ target }) =>
    refToElement.current && !refToElement.current!.contains(target)
      ? callback()
      : false
  useEffect(() => {
    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  })
}
