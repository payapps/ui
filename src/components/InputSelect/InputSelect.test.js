import React from 'react'
import { render, screen, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputSelect } from './InputSelect'

const setup = (props) => {
  const utils = render(
    <InputSelect {...props} />
  )
  const LABEL_DEFAULT = 'input-select'
  const LABEL_TEXT = props.inputDisabled ? `${LABEL_DEFAULT}-text` : `${LABEL_DEFAULT}-input`
  const input = utils.getByLabelText(LABEL_TEXT)
  return {
    input,
    ...utils
  }
}

const onSelect = jest.fn()

const initProps = {
  options: ['20', '5', '0'],
  value: '5',
  suffix: '%',
  onSelect,
  inputDisabled: false
}

const currencyProps = {
  decimalScale: 2,
  thousandSeparator: ',',
  allowNegative: true,
  prefix: '$',
  suffix: undefined,
  options: ['1000', '2000', '3000'],
  value: '1000',
  fixedDecimalScale: 2,
  inputDisabled: false,
  onSelect
}

const getDropDown = () => {
  const dropdown = screen.getByRole('listbox')
  const { getAllByRole } = within(dropdown)
  const items = getAllByRole('listitem')
  const listValues = items.map(item => item.textContent)
  return {
    dropdown,
    listItems: items,
    listItemValues: listValues
  }
}

test('Shows initial value', () => {
  const { input } = setup(initProps)
  expect(input.value).toBe('5%')
})

test('Shows percentage as suffix to input', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('23%')
})

test('Shows dropdown on input change', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '30' } })
  const { dropdown } = getDropDown()
  expect(dropdown).toBeInTheDocument()
})

test('Shows all initial values in dropdown', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '30' } })
  const { listItems, listItemValues } = getDropDown()
  expect(listItems.length).toBe(3)
  expect(listItemValues).toEqual(['20%', '5%', '0%'])
})

test('Can select value from drop down', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '30' } })
  fireEvent.click(screen.getByText('5%'))
  expect(input.value).toBe('5%')
})

test('Input change filters drop down', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '20' } })
  const { listItems } = getDropDown()
  expect(listItems.length).toBe(1)
  expect(listItems[0].textContent).toBe('20%')
})

test('Input of unique value adds to drop down for later use', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '20.10' } })
  fireEvent.click(document.body)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const { listItems, listItemValues } = getDropDown()
  expect(listItems.length).toBe(4)
  expect(listItemValues).toEqual(['20%', '5%', '0%', '20.10%'])
})

test('Oldest custom value purged when drop down length greater than 5', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '20.10' } })
  fireEvent.click(document.body)
  fireEvent.change(input, { target: { value: '20.20' } })
  fireEvent.click(document.body)
  fireEvent.change(input, { target: { value: '20.30' } })
  fireEvent.click(document.body)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const { listItemValues, listItems } = getDropDown()
  expect(listItems.length).toBe(5)
  expect(listItemValues).toEqual(['20%', '5%', '0%', '20.20%', '20.30%'])
})

test('Passed callbacks will be called', () => {
  const { input } = setup(initProps)
  fireEvent.change(input, { target: { value: '15' } })
  fireEvent.blur(input, { value: input.value })
  expect(onSelect).toHaveBeenCalledWith({ value: '15' })
})

test('Can disable input field', () => {
  setup({ ...initProps, inputDisabled: true })
  expect(screen.getByText('5%')).toBeTruthy()
})

test('Selecting from dropdown with input disabled changes display value', () => {
  setup({ ...initProps, inputDisabled: true })
  const button = screen.getByRole('button')
  fireEvent.click(button)
  fireEvent.click(screen.getByText('20%'))
  const selected = screen.getByLabelText('input-select-text')
  expect(selected.textContent).toEqual('20%')
})

test('Selecting from dropdown with input disabled calls callback', () => {
  setup({ ...initProps, inputDisabled: true })
  const button = screen.getByRole('button')
  fireEvent.click(button)
  fireEvent.click(screen.getByText('20%'))
  const selected = screen.getByLabelText('input-select-text')
  expect(selected.textContent).toEqual('20%')
  expect(onSelect).toHaveBeenCalledWith({ value: '20' })
})

test('Will format currency values', () => {
  const { input } = setup(currencyProps)
  expect(input.value).toBe('$1,000.00')
})
