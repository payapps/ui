import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

const hoverColors = (props: {[key: string]: any}) => {
  const map = {
    loading: {
      backgroundColor: props.theme.legacy.colors.lightBlue,
      color: props.theme.legacy.colors.white,
      border: props.theme.legacy.colors.lightBlue
    },
    success: {
      backgroundColor: props.theme.legacy.colors.green,
      color: props.theme.legacy.colors.white,
      border: props.theme.legacy.colors.green
    }
  }
  return map[props.status]
}

export const Tertiary = styled(ButtonBase)`
  background-color: ${props => props.theme.legacy.colors.white};
  color: ${props => props.theme.legacy.colors.medGrey};
  border: 1px solid ${props => props.theme.legacy.colors.lightGrey};
  &:hover {
    ${props => {
        const defaults = {
          backgroundColor: props.theme.legacy.colors.white,
          color: props.theme.legacy.colors.lightBlue,
          border: props.theme.legacy.colors.lightBlue
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
