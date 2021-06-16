import React, { Fragment } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Grid,
  GridItem,
  Box,
  Portal,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

interface Props {
  heading?: string | null;
  width?: string | number;
  children: any;
}

export const WarningPopover = ({ heading = null, width = '300px', children }: Props) => (
  <Popover closeOnBlur={false} placement="bottom">
    {({ onClose }) => (
      <Fragment>
        <PopoverTrigger>
          <Box display="inline">
            <FontAwesomeIcon color="#FFBF00" cursor="pointer" icon={faExclamationTriangle} />
          </Box>
        </PopoverTrigger >
        <Portal>
            <PopoverContent boxShadow="0px 8px 16px rgba(0, 0, 0, 0.08)" w={width} backgroundColor='#FFF9E6' borderColor="#FFBF00" borderRadius="2px" p="10px 8px">
            <PopoverArrow bg='#FFF9E6' />
            <PopoverBody textAlign="left">
              <Grid templateColumns="auto 1fr" gap="8px">
                <Box fontSize="16px"><FontAwesomeIcon  color="#FFBF00" icon={faExclamationCircle} /></Box>
                <Box>
                  <Box as="header" fontSize="14px" lineHeight="1.7" mb="22px">{heading}</Box>
                  <Box fontSize="12px">{children}</Box>
                </Box>
                <GridItem colSpan={2} fontSize="14px" color="#FFBF00" textAlign="center" mt="5px">
                  <strong onClick={onClose} style={{ cursor: 'pointer', lineHeight: '2.28' }}>Thanks I got it</strong>
                </GridItem>
              </Grid>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Fragment>
    )}
  </Popover>
)
