import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

const hoverColors = (props: {[key: string]: any}) => {
  const map = {
    loading: {
      backgroundColor: props.theme.colors.lightBlue,
      color: props.theme.colors.white,
      border: props.theme.colors.lightBlue
    },
    success: {
      backgroundColor: props.theme.colors.green,
      color: props.theme.colors.white,
      border: props.theme.colors.green
    }
  }
  return map[props.status]
}

export const Tertiary = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.medGrey};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  &:hover {
    ${props => {
        const defaults = {
          backgroundColor: props.theme.colors.white,
          color: props.theme.colors.lightBlue,
          border: props.theme.colors.lightBlue
        }
        const colors = props.status ? hoverColors(props) : defaults
        return `
          background-color: ${colors.backgroundColor};
          border: solid 1px ${colors.border};
          color: ${colors.color};
        `
      }
    }
  }
`
