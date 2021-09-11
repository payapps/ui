import { Grid } from '@chakra-ui/react'
import { Swatch } from './Swatch'
import { Swatches } from './Swatches'

export const Colours = () => {
  const brandingColors = ['gold', 'aqua', 'purple', 'green', 'orange', 'red', 'blue']
  return (
    <Grid templateColumns='repeat(2, 1fr)' maxWidth='1920px' margin='0 auto'>
      <Grid>
        <Swatch color='hsla(231, 24%, 16%, 1)' />
      </Grid>
      <Grid templateColumns='repeat(7, 1fr)' autoRows='77px'>
        { brandingColors.map((color, index) => (
          <Swatches baseColor={color} key={index} />
        ))}
      </Grid>
    </Grid>
  )
}