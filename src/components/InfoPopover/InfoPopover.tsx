import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Grid,
  Box,
  useTheme,
} from "@chakra-ui/react"
import { ExclamationOutline } from '../Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Props } from './InfoPopover.d'

const Icon = ({ iconType, color }) => iconType === 'outline' ? (
    <ExclamationOutline color={color} />
  ) : (
    <FontAwesomeIcon color={color} cursor="pointer" icon={faExclamationCircle} />
)

export const InfoPopover = ({
  heading = null,
  width="400px",
  children = null,
  warning = false,
  iconType = 'outline'
}: Props) => {
  const { colors } = useTheme()
  const fz = heading === null ? '14px' : '12px'
  const color = warning ? colors.gold[900] : '#CCC'
  return (
    <Popover closeOnBlur={false} placement="bottom" trigger="hover">
      <PopoverTrigger>
        <Box display="inline">
          <Icon iconType={iconType} color={color} />
        </Box>
      </PopoverTrigger>
      <PopoverContent boxShadow="0px 8px 16px rgba(0, 0, 0, 0.08)" w={width} backgroundColor='#FFFFFF' borderColor="#CCC" borderRadius="2px" p="10px 8px">
        <PopoverArrow />
        <PopoverBody textAlign="left">
          <Grid templateColumns="auto 1fr" gap="8px">
            <Box fontSize="16px"><FontAwesomeIcon  color="#CCC" icon={faExclamationCircle} /></Box>
            <Box>
              <Box as="header" fontSize="14px" lineHeight="1.7">{heading}</Box>
              <Box fontSize={fz}>{children}</Box>
            </Box>
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
