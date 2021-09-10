import React from 'react'
import { GridItem } from '@chakra-ui/react'

type SwatchProps = {
  color: string;
}

export const Swatch = ({ color }: SwatchProps) => {
  return <GridItem backgroundColor={color} />
}