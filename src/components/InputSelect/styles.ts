import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const InputSelectWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 24px;
  grid-auto-columns: 1fr;
  border: solid #EDEDED 1px;
  color: #8A8A8A;
  font-size: 12px;
  line-height: 2;
`

export const DropdownArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  cursor: pointer;
  padding-right: 8px;
`

export const NumberFormatWrapper = styled(NumberFormat)`
  appearance: none;
  padding: 8px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`

export const DropdownWrapper = styled.ul`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-top: solid 1px #EDEDED;
  margin: 0;
  padding: 0;
  list-style-type: none;
  grid-column: 1 / -1;
`

export const DropdownOption = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.35s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
  span {
    display: block;
  }
`
