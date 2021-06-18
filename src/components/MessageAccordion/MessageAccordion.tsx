import React, { ReactNode } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react"
import { useMessageVariant } from './useMessageVariant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  children: any;
  message: ReactNode;
  type: 'warning' | 'error' | 'success';
}

export const MessageAccordion = ({ message, type = 'warning', children }: Props) => {
  const [variant] = useMessageVariant(type)
  const { icon, borderColor, backgroundColor, color } = variant
  return (
    <Accordion allowToggle >
      <AccordionItem
        border={`solid 1px ${borderColor}`}
        color={color}
        fontSize={14}
        backgroundColor={backgroundColor}
      >
        <AccordionButton fontSize={14} style={{ boxShadow: 'none' }} _hover={backgroundColor}>
          <Grid
            gridTemplateColumns='auto 1fr max-content'
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
