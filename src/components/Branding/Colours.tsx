import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Swatch } from './Swatch'
import { Swatches } from './Swatches'

// hsla(47, 100%, 47%, 1)

export const Colours = () => {
  return (
    <Grid border='solid red 1px' templateColumns='repeat(2, 1fr)' width='1920px' margin='0 auto'>
      <Grid>
        <Swatch color='hsla(231, 24%, 16%, 1)' />
      </Grid>
      <Grid>
        <Swatches
          baseColor='hsla(47, 100%, 50%, 1)'
          lightness={['47', '43', '38', '30', '20']}
        />
        <code>colours</code>
      </Grid>
    </Grid>
  )
}