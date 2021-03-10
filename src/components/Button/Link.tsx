import styled from 'styled-components'

export const Link = styled.span<{ [key: string]: any }>`
  display: inline-block;
  color: ${props => props.theme.colors.lightBlue};
  font-weight: 500;
  font-size: ${props => props.fontSize};
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  cursor: pointer;
`
