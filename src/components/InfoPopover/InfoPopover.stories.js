import React from 'react';
import { InfoPopover } from './InfoPopover'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

const config = {
  title: 'Payapps/Popovers',
  component: InfoPopover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <InfoPopover {...args} />;

export const Info = Template.bind({});
Info.args = {
  // heading: 'Previous AFP is not yet certified. This column shows the latter of last certified value or applied for to date value.',
  children: 'Previous AFP is not yet certified. This column shows the latter of last certified value or applied for to date value.'
};

export default config
