import React, { useState, useRef, SyntheticEvent } from 'react'
import { PayappsUI } from '../../typings';
import NumberFormat from 'react-number-format';
import { useClickOutside, useEscapeKey } from '../hooks'
import { InputArrowDown } from './InputArrowDown'
import  * as Styles from './styles'

export const InputSelect = <T extends {}> ({
  options,
  value = '',
  maxDisplayLength = 5,
  ...rest
}: PayappsUI.InputSelectProps<T>) => {
  const [inputValue, setInputValue] = useState(`${value}`)
  const [optionsArray, setOptionsArray] = useState(options)
  const [dropDownOptions, setDropDownOptions] = useState(options)
  const [showDropdown, setShowDropdown] = useState(false)
  const dropDownRef = useRef(null)

  const filterOptions = (value: string) => {
    const filtered = dropDownOptions.filter(option => option.includes(`${value}`.toLowerCase()))
    return filtered.length === 0 ? optionsArray : filtered
  }

  const removeOldestCustomOption = (optionsArr) => {
    return optionsArr.length >= maxDisplayLength + 1 ? [...options, ...optionsArr.slice(options.length + 1)] : optionsArr
  }

  const addUniqueOption = (option: string) => {
    return removeOldestCustomOption([...new Set([...optionsArray, option])])
  }

  const handleUniqueOptionAddition = (value: string) => {
    setOptionsArray(addUniqueOption(value))
    setDropDownOptions(optionsArray)
  }

  const handleChange = ({ value }) => {
    setShowDropdown(true)
    setDropDownOptions(filterOptions(value))
    setInputValue(value)
  }

  const handleBlur = ({ target }) => {
    const { value } = target
    // setValueFunc in here probs
  }

  const closeDropDown = () => {
    setShowDropdown(false)
    handleUniqueOptionAddition(inputValue)
  }

  const handleArrowClick = (e: SyntheticEvent) => {
    e.stopPropagation()
    setShowDropdown(!showDropdown)
    handleUniqueOptionAddition(inputValue)
  }

  useClickOutside(dropDownRef, closeDropDown);
  useEscapeKey(closeDropDown);

  const handleClick = (option: string) => {
    setInputValue(option)
    setShowDropdown(false)
  }

  return (
    <Styles.InputSelectWrapper>
      <Styles.NumberFormatWrapper
        type="text"
        value={inputValue}
        onValueChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />
      <Styles.DropdownArrowWrapper onClick={handleArrowClick}>
        <InputArrowDown />
      </Styles.DropdownArrowWrapper>
      {showDropdown &&
        <Styles.DropdownWrapper ref={dropDownRef}>
          {dropDownOptions.map((option, index) => (
            <Styles.DropdownOption
              data-option={option}
              key={index}
            >
              <NumberFormat
                displayType='text'
                value={option}
                onClick={() => handleClick(option)}
                {...rest}
              />
            </Styles.DropdownOption>
          ))}
        </Styles.DropdownWrapper>
      }
    </Styles.InputSelectWrapper>
  )
}