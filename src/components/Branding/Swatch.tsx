import { GridItem, GridItemProps } from '@chakra-ui/react'
import styled from 'styled-components'

type SwatchProps =
  & GridItemProps
  & {
    color: string;
    baseColor?: string
  }

const Wrapper = styled(GridItem)`
  transition: transform 0.25s;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`
const getOpacityValue = (arg: string) => {
  const opacity = arg.replace(/\s/g,  '').match(/\((.*?)\)/)
  return opacity ? `${parseFloat(opacity[1].split(',').reverse()[0]) * 100}%` : undefined
}

export const Swatch = ({ color, ...rest }: SwatchProps) => {
  const opacity = getOpacityValue(color)
  const displayValue = opacity ? `${rest.baseColor}` : color
  const fontColor = opacity ? 'inherit' : '#FFF'
  return (
    <Wrapper
      display='flex'
      textAlign='center'
      alignItems='center'
      justifyContent='center'
      backgroundColor={color}
      fontSize='12px'
      fontWeight='bold'
      color={fontColor}
      {...rest}
    >
      <span>
        <div>{displayValue} {opacity && ` - ${opacity}`}</div>
      </span>
    </Wrapper>
  )
}