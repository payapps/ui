import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const Tertiary = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.medGrey};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  &:hover {
      ${props => {
        const isSuccess = props.status && props.status === 'success'
        const bgColor = isSuccess ? 'green' : 'white'
        const borderColor = isSuccess ? props.theme.colors.green : 'rgba(0, 122, 255, 0.4)'
        const color = bgColor === 'white' ? 'lightBlue' : 'white'
        return `
          background-color: ${props.theme.colors[bgColor]};
          border: solid 1px ${borderColor};
          color: ${props.theme.colors[color]};
        `
      }
    }
  }
`
