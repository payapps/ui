import React, { useState, useRef } from 'react'
import { useClickOutside, useEscapeKey } from '../hooks'

export const InputSelect = ({ rates, rate, children }) => {
  const [taxRates, setTaxRates] = useState(rate)
  const [ratesArray, setRatesArray] = useState(rates)
  const [dropDownData, setDropDownData] = useState(rates)
  const [showDropdown, setShowDropdown] = useState(false)
  const dropDownRef = useRef(null)

  const isValidInput = value => value == null || isNaN(parseInt(value))

  const filterRate = value => {
    const filtered = dropDownData.filter(rate => rate.includes(`${value}`.toLowerCase()))
    return isValidInput(value) || filtered.length === 0 ? ratesArray : filtered
  }

  const addUniqueRate = (rate) => {
    return [...new Set([...ratesArray, rate])]
  }

  const handleUniqueRateAddition = (value) => {
    const newRateValue = value.charAt(value.length - 1) === '%' ? value : `${value}%`
    setRatesArray(addUniqueRate(newRateValue))
  }

  const handleChange = ({ target }) => {
    const { value } = target
    setShowDropdown(true)
    setDropDownData(filterRate(value))
    setTaxRates(value)
  }

  const handleBlur = ({ target }) => {
    const { value } = target
    // setValueFunc in here probs
  }

  const closeDropDown = () => {
    setShowDropdown(false)
    handleUniqueRateAddition(taxRates)
  }

  useClickOutside(dropDownRef, closeDropDown);
  useEscapeKey(closeDropDown);

  const handleClick = ({ target }) => {
    setTaxRates(target.getAttribute('data-rate'))
    setShowDropdown(false)
  }

  return (
    <div style={{ border: 'solid red 1px' }}>
      <input
        type="text"
        value={taxRates}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {showDropdown &&
        <ul ref={dropDownRef}>
          {dropDownData.map((rate, index) => (
            <li onClick={handleClick} data-rate={rate} key={index}>{rate}</li>
          ))}
        </ul>
      }
    </div>
  )
}