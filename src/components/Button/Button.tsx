import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { LoadingSpinner, Tick } from '../Icons'
import { ButtonProps } from './Button.d'
import { Primary } from './Primary'
import { Secondary } from './Secondary'
import { Tertiary } from './Tertiary'
import { Link } from './Link'

const TextContent = styled.div`
  transition: opacity 0.125s;
  line-height: 1.16;
`
const Wrapper = styled.div`position: relative;`

export const Button = forwardRef((props: ButtonProps, ref: any) => {
  const {
    type = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    block = false,
    success,
    children,
    className = '',
    underline = false,
    fontSize = 'inherit',
    ...rest
  } = props

  const ComponentTypes = {
    primary: Primary,
    secondary: Secondary,
    tertiary: Tertiary,
    link: Link
  }

  const Component = ComponentTypes[type]
  const isLoading = loading && !disabled
  const successPending = success !== undefined
  const opacity = isLoading ? 0 : (successPending && success ? 0 : 1)
  const status = success ? 'success' : isLoading ? 'loading' : null
  const ButtonRequestStatus = status === 'success' ? Tick : LoadingSpinner

  return (
    <Component
      {...rest}
      size={size}
      disabled={disabled}
      status={status}
      ref={ref}
      block={block}
      className={className}
      underline={underline}
      fontSize={fontSize}
    >
      { type === 'link' ? (
          <span className='paui-button--link'>
            {children}
          </span>
        ) : (
          <Wrapper>
            <TextContent style={{ opacity }}>{children}</TextContent>
            {status && <ButtonRequestStatus />}
          </Wrapper>
        ) 
      }
    </Component>
  )
})
