import { useTheme } from '@chakra-ui/react'
import { Swatch } from './Swatch'

type SwatchesProps = {
  baseColor: string
}

export const Swatches = ({ baseColor }: SwatchesProps) => {
  const { colors } = useTheme()
  const filteredKeys = (arr: string[]) => arr.filter((item: string) => !['50', '100', '200', '300'].includes(item))
  const baseColorKeyValPairs = colors[baseColor]
  const baseColorAlphaKeyValPairs = colors[`${baseColor}Alpha`]

  const colorLumVariants = Object.keys(baseColorKeyValPairs).reduce((acc, item) => {
    const value = baseColorKeyValPairs[item]
    return item === '400' ? { ...acc, base: value } : { ...acc, [item]: value}
  }, { base: '' })

  const { base, ...rest } = colorLumVariants

  const colorValues = {...baseColorKeyValPairs, ...baseColorAlphaKeyValPairs}
  const colorAlphaVariantKeys = Object.keys(baseColorAlphaKeyValPairs).reverse()
  const colorLumVariantKeys = filteredKeys(Object.keys(rest))

  const colorKeys = [...colorLumVariantKeys, ...colorAlphaVariantKeys]

  return (
    <>
      <Swatch
        baseColor={base}
        colSpan={2}
        rowSpan={2}
        color={base}
        fontSize='14px'
      />
        {colorKeys.map((colorKey, index) => {
          return (
            <Swatch
              baseColor={base}
              color={colorValues[colorKey]}
              key={index}
              fontSize='12px'
              fontWeight='bold'
            />
          )
        })}
    </>
  )
}