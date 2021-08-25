import React from 'react'
import { InputSelect } from './InputSelect'

const config = {
  title: 'Payapps/Input Select',
  component: InputSelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <InputSelect {...args} />

export const Input = Template.bind({})
Input.args = {
  options: ['20', '5', '0'],
  value: '5',
  suffix: '%',
  onSelect: ({ value }) => { console.log('value', value) }
}

export const CurrencyInputSelect = Template.bind({})
CurrencyInputSelect.args = {
  decimalScale: 2,
  thousandSeparator: ',',
  allowNegative: true,
  prefix: '$',
  suffix: undefined,
  options: ['1000', '2000', '3000'],
  value: '1000',
  fixedDecimalScale: 2
}

export const DisabledInputSelect = Template.bind({})
DisabledInputSelect.args = {
  options: ['20', '5', '0'],
  value: '5',
  suffix: '%',
  onSelect: ({ value }) => { console.log('value', value) },
  inputDisabled: true
}

export default config
