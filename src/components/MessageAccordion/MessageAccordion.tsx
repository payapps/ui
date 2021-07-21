import React, { ReactNode, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  Box,
} from "@chakra-ui/react"
import { useStatusVariant } from '../hooks/useStatusVariant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  children: any;
  message: ReactNode;
  type: 'warning' | 'error' | 'success';
}

export const MessageAccordion = ({ message, type = 'warning', children }: Props) => {
  const [variant] = useStatusVariant(type)
  const { icon, borderColor, backgroundColor, color } = variant
  const TRANSITION_TIMING = '0.25s'
  const TRANSITION_PROPS = `background-color ${TRANSITION_TIMING}, border-color ${TRANSITION_TIMING}`
  return (
    <Accordion allowToggle >
      <AccordionItem
        border={`solid 1px ${borderColor}`}
        color={color}
        fontSize={14}
        backgroundColor={backgroundColor}
        transition={TRANSITION_PROPS}
      >
        <AccordionButton fontSize={14} style={{ boxShadow: 'none' }} _hover={backgroundColor}>
          <Grid
            gridTemplateColumns='18px 1fr max-content'
            gridGap="16px"
            w="100%"
            textAlign='left'
            alignItems='center'
            as='header'
          >
            <Box fontSize={16}>
              <FontAwesomeIcon color={borderColor} cursor="pointer" icon={icon} />
            </Box>
            <Box color={color}>{message}</Box>
            <AccordionIcon fontSize={24} />
          </Grid>
        </AccordionButton>
        <AccordionPanel pb={4} pl={12} fontSize={12}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
