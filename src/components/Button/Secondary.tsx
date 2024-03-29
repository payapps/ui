import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

const backgroundHoverStyles = (props: {[key: string]: any}) => {
  const bgColor = props.status && props.status === 'success' ? 'green' : 'lightBlue'
  return `
    background-color: ${props.theme.legacy.colors[bgColor]};
    border: ${props.theme.legacy.colors[bgColor]} solid 1px;
    color: ${props.theme.legacy.colors.white};
  `
}

export const Secondary = styled(ButtonBase)`
  background-color: ${props => props.theme.legacy.colors.white};
  border: solid rgba(0, 122, 255, 0.4) 1px;
  color: ${props => props.theme.legacy.colors.lightBlue};
  &:hover {
    ${props => backgroundHoverStyles(props)}
  }
`
