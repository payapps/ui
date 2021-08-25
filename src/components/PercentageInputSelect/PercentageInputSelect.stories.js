import React from 'react'
import { PercentageInputSelect } from './PercentageInputSelect'

const config = {
  title: 'Payapps/Percentage Input Select',
  component: PercentageInputSelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <PercentageInputSelect {...args} />

export const PercentageInput = Template.bind({})
PercentageInput.args = {
  options: ['20', '5', '0'],
  value: '5'
}

export default config
