import React, { useState, useRef, SyntheticEvent, useEffect } from 'react'
import { PayappsUI } from '../../typings';
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
  ...rest
}: PayappsUI.InputSelectProps<T>) => {
  const [inputValue, setInputValue] = useState(`${value}`)
  const [optionsArray, setOptionsArray] = useState(options)
  const [showDropdown, setShowDropdown] = useState(false)
  const [filterActive, setFilterActive] = useState(false)
  // const [changeViaKeyboard, setChangeViaKeyboard] = useState(false)
  const dropDownRef = useRef(null)

  // useEffect(() => {

  //   return () => console.log('cleanup');
  // }, [])
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
        <DropdownWrapper ref={dropDownRef}>
          {processedOptions.map((option: string, index: number) => (
            <DropdownOption
              data-option={option}
              key={index}
            >
              <NumberFormat
                displayType='text'
                value={option}
                onClick={() => handleClick(option)}
                {...rest}
              />
            </DropdownOption>
          ))}
        </DropdownWrapper>
      ) : null
  }

  let count = 0

  return (
    <InputSelectWrapper>
      <NumberFormatWrapper
        type="text"
        value={inputValue}
        onValueChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />
      <DropdownArrowWrapper onClick={handleArrowClick}>
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