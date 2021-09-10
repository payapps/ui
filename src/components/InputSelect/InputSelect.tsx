import React, { useState, useRef, SyntheticEvent } from 'react'
import { PayappsUI } from '../types'
import NumberFormat from 'react-number-format'
import { useClickOutside, useEscapeKey } from '../hooks'
import { InputArrowDown } from './InputArrowDown'
import { DropdownOption, DropdownArrowWrapper, DropdownWrapper, InputSelectWrapper, NumberFormatWrapper } from './styles'
import { useEffect } from 'react'

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
  inputDisabled = false,
  disabled = false,
  onSelect = () => undefined,
  ...rest
}: PayappsUI.InputSelectProps<T>) => {
  const [inputValue, setInputValue] = useState('')
  const [optionsArray, setOptionsArray] = useState(options)
  const [showDropdown, setShowDropdown] = useState(false)
  const [filterActive, setFilterActive] = useState(false)
  const [externalChange, setExternalChange] = useState(false)
  const dropDownRef = useRef(null)

  const displayType = inputDisabled ? 'text' : 'input'
  const aria = `${ariaLabel}-${displayType}`

  useEffect(() => {
    setOptionsArray(options)
    setExternalChange(true)
    setInputValue(`${value}`)

  }, [options, value])

  const removeOldestCustomOption = (optionsArr: string[]) => {
    return optionsArr.length >= maxDisplayLength + 1 ? [...options, ...optionsArr.slice(options.length + 1)] : optionsArr
  }

  const addUniqueOption = (option: string) => removeOldestCustomOption([...new Set([...optionsArray, option])])

  const handleUniqueOptionAddition = (value: string) => setOptionsArray(addUniqueOption(value))

  const handleChange = ({ value }) => {
    if (!externalChange) {
      setFilterActive(true)
      setShowDropdown(true)
      setInputValue(value)
    }
    setExternalChange(false)
  }

  const handleBlur = () => {
    return onSelect({ value: inputValue })
  }

  const closeDropDown = () => {
    setShowDropdown(false)
    handleUniqueOptionAddition(inputValue)
    return inputDisabled ? onSelect({ value: inputValue }) : false
  }

  const handleArrowClick = (e: SyntheticEvent) => {
    e.stopPropagation()
    setShowDropdown(!showDropdown)
    handleUniqueOptionAddition(inputValue)
    setFilterActive(false)
  }

  useEscapeKey(closeDropDown)
  useClickOutside(dropDownRef, closeDropDown)

  const handleClick = (option: string) => {
    setShowDropdown(false)
    setInputValue(option)
    setExternalChange(true)
    onSelect({ value: option })
  }

  const DropDownOptions = <T extends {}>({
    show,
    options,
    filterValue,
    filterActive,
    displayType,
    ...rest
  }: DropDownOptionsProps<T>) => {
    const filtered = options.filter((option: string) => option.includes(`${filterValue}`.toLowerCase()))
    const processedOptions = filtered.length > 0 && filterActive ? filtered : options
    return show
      ? (
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
        )
      : null
  }

  return (
    <InputSelectWrapper aria-disabled={disabled}>
      <NumberFormatWrapper
        type="text"
        name={name}
        value={inputValue}
        onValueChange={handleChange}
        onBlur={handleBlur}
        displayType={displayType}
        aria-label={aria}
        disabled={disabled}
        {...rest}
        {...(displayType === 'text' ? { onClick: handleArrowClick } : {})}
      />
      <DropdownArrowWrapper role='button' onClick={handleArrowClick}>
        <InputArrowDown />
      </DropdownArrowWrapper>
      <DropDownOptions
        filterActive={filterActive}
        show={showDropdown && !disabled}
        options={optionsArray}
        filterValue={inputValue}
        {...rest}
      />
    </InputSelectWrapper>
  )
}
