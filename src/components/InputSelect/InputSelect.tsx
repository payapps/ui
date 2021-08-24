import React, { useState, useRef, SyntheticEvent } from 'react'
import { PayappsUI } from '../types';
import NumberFormat from 'react-number-format';
import { useClickOutside, useEscapeKey } from '../hooks'
import { InputArrowDown } from './InputArrowDown'
import { DropdownOption, DropdownArrowWrapper, DropdownWrapper, InputSelectWrapper, NumberFormatWrapper } from './styles'

type DropDownOptionsProps<T> =
  & PayappsUI.InputSelectProps<T>
  & T
  & {
    show: boolean
    filterValue: string
    filterActive: boolean
  }

export const InputSelect = <T extends {}> ({
  options,
  value = '',
  maxDisplayLength = 5,
  name = 'inputselect',
  ariaLabel = 'input-select',
  onBlur,
  ...rest
}: PayappsUI.InputSelectProps<T>) => {
  const [inputValue, setInputValue] = useState(`${value}`)
  const [optionsArray, setOptionsArray] = useState(options)
  const [showDropdown, setShowDropdown] = useState(false)
  const [filterActive, setFilterActive] = useState(false)
  const dropDownRef = useRef(null)

  const removeOldestCustomOption = (optionsArr: string[]) => {
    return optionsArr.length >= maxDisplayLength + 1 ? [...options, ...optionsArr.slice(options.length + 1)] : optionsArr
  }

  const addUniqueOption = (option: string) => removeOldestCustomOption([...new Set([...optionsArray, option])])

  const handleUniqueOptionAddition = (value: string) => setOptionsArray(addUniqueOption(value))

  const handleChange = ({ value }) => {
    setFilterActive(true)
    setShowDropdown(true)
    setInputValue(value)
  }

  const handleBlur = () => {
    if (onBlur) {
      onBlur({ value: inputValue })
    }
  }

  const closeDropDown = () => {
    setShowDropdown(false)
    handleUniqueOptionAddition(inputValue)
  }

  const handleArrowClick = (e: SyntheticEvent) => {
    e.stopPropagation()
    setShowDropdown(!showDropdown)
    handleUniqueOptionAddition(inputValue)
    setFilterActive(false)
  }

  useEscapeKey(closeDropDown);
  useClickOutside(dropDownRef, closeDropDown);

  const handleClick = (option: string) => {
    setInputValue(option)
    setShowDropdown(false)
  }

  const DropDownOptions = <T extends {}>({
    show,
    options,
    filterValue,
    filterActive,
    ...rest
    }: DropDownOptionsProps<T>) => {
      const filtered = options.filter((option: string) => option.includes(`${filterValue}`.toLowerCase()))
      const processedOptions = filtered.length > 0 && filterActive ? filtered : options
      return show ? (
        <DropdownWrapper ref={dropDownRef} role='listbox'>
          {processedOptions.map((option: string, index: number) => (
            <DropdownOption
              data-option={option}
              key={index}
            >
              <NumberFormat
                displayType='text'
                value={option}
                onClick={() => handleClick(option)}
                role='option'
                {...rest}
              />
            </DropdownOption>
          ))}
        </DropdownWrapper>
      ) : null
  }

  return (
    <InputSelectWrapper>
      <NumberFormatWrapper
        type="text"
        name={name}
        value={inputValue}
        onValueChange={handleChange}
        onBlur={handleBlur}
        aria-label={ariaLabel}
        {...rest}
      />
      <DropdownArrowWrapper role='button' onClick={handleArrowClick}>
        <InputArrowDown />
      </DropdownArrowWrapper>
      <DropDownOptions
        filterActive={filterActive}
        show={showDropdown}
        options={optionsArray}
        filterValue={inputValue}
        {...rest}
      />
    </InputSelectWrapper>
  )
}