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

export const Input = Template.bind({});
Input.args = {
  options: ['20', '5', '0'],
  value: '5',
  suffix: '%'
};

export default config

