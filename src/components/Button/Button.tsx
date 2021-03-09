import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { LoadingSpinner, Tick } from '../Icons'
import { ButtonProps } from './Button.d'
import { Primary } from './Primary'
import { Secondary } from './Secondary'
import { Tertiary } from './Tertiary'

const TextContent = styled.div`
  transition: opacity 0.125s;
  line-height: 1.16;
`
const Wrapper = styled.div`position: relative;`

export const Button = forwardRef((props: ButtonProps, ref: any) => {
  const {
    type = 'primary',
    loading = false,
    disabled = false,
    block = false,
    success,
    children,
    className = '',
    ...rest
  } = props
  const ComponentTypes = {
    primary: Primary,
    secondary: Secondary,
    tertiary: Tertiary
  }

  const Component = ComponentTypes[type]
  const isLoading = loading && !disabled
  const opacity = isLoading ? 0 : 1
  const status = isLoading && success ? 'success' : isLoading ? 'loading' : null
  const ButtonRequestStatus = status === 'success' ? Tick : LoadingSpinner

  return (
    <Component {...rest} disabled={disabled} status={status} ref={ref} block={block} className={className}>
      <Wrapper>
        <TextContent style={{ opacity }}>{children}</TextContent>
        {status && <ButtonRequestStatus />}
      </Wrapper>
    </Component>
  )
})
