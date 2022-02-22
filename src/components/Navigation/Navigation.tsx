import { Grid, GridItem } from '@chakra-ui/react'
import { faHome, faCheck, faGear, faChartColumn, faClock, faCircleQuestion, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navigation = (props) => {
  return (
    <Grid
      bgColor='#005681'
      color='#FFF'
      gridTemplateColumns='1fr 1fr'
    >
      <GridItem
        padding={16}
        alignItems='center'
      >
        <Grid
          gridTemplateColumns='repeat(auto-fit, minmax(0, max-content))'
          columnGap='16px'
        >
          <GridItem>lg</GridItem>
          <GridItem>
            <FontAwesomeIcon icon={faHome} />
          </GridItem>
          <GridItem>
            <FontAwesomeIcon icon={faCheck} />
          </GridItem>
          <GridItem>
            <FontAwesomeIcon icon={faChartColumn} />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem
        padding={16}
        display='grid'
        alignItems='center'
      >
        <Grid
          gridTemplateColumns='repeat(auto-fit, minmax(0, max-content))'
          columnGap='16px'
          justifyContent='end'
        >
          <GridItem>
            <FontAwesomeIcon icon={faClock} />
          </GridItem>
          <GridItem>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </GridItem>
          <GridItem>
            <FontAwesomeIcon icon={faCircleInfo} />
          </GridItem>
          <GridItem>
            <FontAwesomeIcon icon={faGear} />
          </GridItem>
          <GridItem>
            Account
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  )
}