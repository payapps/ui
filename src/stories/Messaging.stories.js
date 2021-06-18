import React from 'react';
import { MessageAccordion } from '../components/MessageAccordion'
import { List, ListItem, ListIcon, OrderedList, UnorderedList, Box, Grid } from "@chakra-ui/react"

const config = {
  title: 'Payapps/Messaging',
  component: MessageAccordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MessageAccordion {...args} />;

const ModifiedOverlappingClaimItemList = () => (
  <Box pl={8} pb={5}>
    <UnorderedList lineHeight={2}>
      <ListItem>Certified to Date,</ListItem>
      <ListItem>Yet to be Certified,</ListItem>
      <ListItem>Professional Indemnity Insurance,</ListItem>
      <ListItem>Previously Certified</ListItem>
    </UnorderedList>
  </Box>
)
const ModifiedOverlappingClaimMessage = () => 
  <Grid gridTemplateColumns='1fr max-content'>
    <Box>
      Application for payment <strong>#3</strong> was certified <strong>£2,000.00</strong> less than originally applied for. This will now reflect on all current pending and draft AFPs.
    </Box>
    <Box color='#0D87FF'>
      View changes
    </Box>

  </Grid>

export const MessageAccordionInfo = Template.bind({});
MessageAccordionInfo.args = {
  message: <ModifiedOverlappingClaimMessage />,
  children: <ModifiedOverlappingClaimItemList />
};

export default config
