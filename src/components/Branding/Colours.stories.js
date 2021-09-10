import React from 'react'
import { Colours } from './Colours'

const config = {
  title: 'Payapps/Branding',
  component: Colours,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Colours {...args} />

export const BrandingColours = Template.bind({})
BrandingColours.args = {
  children: null
}

export default config

