import React from 'react';
import { MessageAccordion } from '../components/MessageAccordion'

const config = {
  title: 'Payapps/Messaging',
  component: MessageAccordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MessageAccordion {...args} />;

export const MessageAccordionInfo = Template.bind({});
MessageAccordionInfo.args = {
  children: 'Previous AFP is not yet certified. This column shows the latter of last certified value or applied for to date value.'
};

export default config
