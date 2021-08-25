import React from 'react'
import { Button } from './Button.tsx'

const config = {
  title: 'Payapps/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  loading: false,
  success: false,
  disabled: false,
  children: 'Publish',
  block: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  loading: false,
  success: false,
  children: 'Publish',
  disabled: false,
  block: false
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  loading: false,
  success: false,
  children: 'Publish',
  disabled: false,
  block: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'primary',
  disabled: true,
  loading: false,
  success: false,
  children: 'Publish',
  block: false
}

export default config
