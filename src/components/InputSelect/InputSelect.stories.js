import React from 'react';
import { InputSelect } from './InputSelect'

const config = {
  title: 'Payapps/Input Select',
  component: InputSelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <InputSelect {...args} />;

export const Info = Template.bind({});
Info.args = {
  rates: ['20%', '5%', '0%'],
  rate: '5%',
  children: 'Previous AFP is not yet certified. This column shows the latter of last certified value or applied for to date value.'
};

export default config

