import styled from 'styled-components'

export const ButtonBase = styled.button<{ block?: boolean, status?: string | null, success?: boolean | null }>`
  &[disabled] {
    background-color: ${props => props.theme.colors.xtraLightGrey};
    color: ${props => props.theme.colors.lightGrey};
    border: 1px solid rgba(182, 197, 206, 0.5);
    pointer-events: none;
  }

  display: inline-block;
  position: relative;
  font-size: 18px;
  height: 44px;
  padding: 12px 40px 12px;
  font-weight: 700;
  border-radius: 22px;
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color 0.125s, color 0.125s;

  ${props => {
    const statusBGColor = props.status === 'loading' ? 'lightBlue' : 'green'
    const opacity = props.status === 'loading' ? '1' : 'inherit'
    return props.status ? (
      `
        && {
          border: solid transparent 1px;
          background-color: ${props.theme.colors[statusBGColor]};
          color: ${props.theme.colors.white};
          &:before {
            opacity: ${opacity};
          }
        }
      `
    ) : (
      null
    )
  }}

  ${props => (
    props.block ? (
      `
        width: 100%;
        & + & {
          margin-top: 16px;
        }
      `
    ) : (
      `
        width: auto;
        & + & {
          margin-left: 16px;
        }
      ` 
    )
  )}

  &:before {
    content: '';
    position: absolute;
    display: block;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    z-index: 0;
    transition: opacity 0.35s;
    border-radius: inherit;
    mix-blend-mode: multiply;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: $lightBlue;
    color: $white;
    border: solid 1px $lightBlue;
    &:before {
      background: rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
  }

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-55%) translateX(-50%);
    width: 1.2em;
    height: 1.2em;
  }
`
