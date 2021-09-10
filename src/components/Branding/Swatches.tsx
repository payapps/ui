import React from 'react'
import { Swatch } from './Swatch'

type SwatchesProps = {
  baseColor: string
  lightness: string[]
}

const alphas: string[] = ['0.8', '0.6', '0.4', '0.2', '0.1']
export const Swatches = ({ baseColor, lightness }: SwatchesProps) => {
  console.log('alphas', alphas, baseColor, lightness);
  return <Swatch color='tamato' />
}