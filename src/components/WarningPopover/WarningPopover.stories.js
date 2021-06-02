import React from 'react';
import { WarningPopover } from './WarningPopover'
import { ListItem, UnorderedList } from "@chakra-ui/react"

const config = {
  title: 'Payapps/Popovers',
  component: WarningPopover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const WarningInner = () => (
  <UnorderedList listStylePos="inside" m={0} lineHeight={2}>
    <ListItem>Certified to Date,</ListItem>
    <ListItem>Yet to be Certified,</ListItem>
    <ListItem>Professional Indemnity Insurance,</ListItem>
    <ListItem>Previously Certified</ListItem>
  </UnorderedList>
)
const Template = (args) => <WarningPopover {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  heading: 'A previously certifed AFP impacts the following amounts',
  children: <WarningInner />,
};

export default config