import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Grid,
  Box,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

interface Props {
  heading?: string | null;
  children?: any;
  width?: string | number;
}

export const InfoPopover = ({ heading = null, width="400px", children = null }: Props) => {
  const fz = heading === null ? '14px' : '12px'
  return (
    <Popover closeOnBlur={false} placement="bottom" trigger="hover">
      <PopoverTrigger>
        <Box display="inline">
          <FontAwesomeIcon color="#CCC" cursor="pointer" icon={faExclamationCircle} />
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