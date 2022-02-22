import React from 'react'
import { Navigation } from './Navigation'

const config = {
  title: 'Payapps/Navigation',
  component: Navigation,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Navigation {...args} />

export const MainNavigation = Template.bind({})
// Input.args = {}

// export const CurrencyInputSelect = Template.bind({})
// CurrencyInputSelect.args = {
//   decimalScale: 2,
//   thousandSeparator: ',',
//   allowNegative: true,
//   prefix: '$',
//   suffix: undefined,
//   options: ['1000', '2000', '3000'],
//   value: '1000',
//   fixedDecimalScale: 2
// }

// export const DisabledInputSelect = Template.bind({})
// DisabledInputSelect.args = {
//   options: ['20', '5', '0'],
//   value: '5',
//   suffix: '%',
//   onSelect: ({ value }) => { console.log('value', value) },
//   inputDisabled: true
// }

export default config
