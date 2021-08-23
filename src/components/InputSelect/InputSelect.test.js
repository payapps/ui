import { render, screen, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { InputSelect } from './InputSelect'

const setup = (props = {}) => {
  const initProps = {
    options: ['20', '5', '0'],
    value: '5',
    suffix: '%',
    ...props
  }
  const utils = render(
    <InputSelect {...initProps} />
  )
  const input = utils.getByLabelText('input-select')
  return {
    input,
    ...utils
  }
}

const getDropDown = () => {
  const dropdown = screen.getByRole('listbox')
  const { getAllByRole } = within(dropdown)
  const items = getAllByRole("listitem")
  const listValues = items.map(item => item.textContent)
  return {
    dropdown,
    listItems: items,
    listItemValues: listValues
  }
}

test('Shows initial value', () => {
  const { input } = setup()
  expect(input.value).toBe('5%')
})

test('Shows percentage as suffix to input', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('23%')
})

test('Shows dropdown on input change', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '30' } })
  const { dropdown } = getDropDown()
  expect(dropdown).toBeInTheDocument()
})

test('Shows all initial values in dropdown', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '30' } })
  const { listItems, listItemValues } = getDropDown()
  expect(listItems.length).toBe(3)
  expect(listItemValues).toEqual(['20%', '5%', '0%'])
})

test('Can select value from drop down', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '30' } })
  fireEvent.click(screen.getByText('5%'))
  expect(input.value).toBe('5%')
})

test('Input change filters drop down', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '20' } })
  const { listItems } = getDropDown()
  expect(listItems.length).toBe(1)
  expect(listItems[0].textContent).toBe('20%')
})

test('Input of unique value adds to drop down for later use', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '20.10' } })
  fireEvent.click(document.body)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const { listItems, listItemValues } = getDropDown()
  expect(listItems.length).toBe(4)
  expect(listItemValues).toEqual(['20%', '5%', '0%', '20.10%'])
})

test('Oldest custom value purged when drop down length greater than 5', () => {
  const { input } = setup()
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
