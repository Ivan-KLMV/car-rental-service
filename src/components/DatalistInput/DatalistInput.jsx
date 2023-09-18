import Select from 'react-dropdown-select';
// import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const DatalistInput = ({
  options,
  labelName,
  selectedItems,
  placeholderText,
  handleChange,
}) => {
  const customOptoins = options.map(item => ({ value: uuidv4(), label: item }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <LabelStyled htmlFor="dropdown-select">{labelName}</LabelStyled>
      <DropdownSelectStyled
        id="dropdown-select"
        options={customOptoins}
        values={selectedItems}
        onChange={handleChange}
        // placeholder="Enter the text"
        placeholder={placeholderText}
        className="react-dropdown-select-custom"
      />
    </div>
  );
};

const LabelStyled = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;
  color: rgba(138, 138, 137, 1);
`;
const DropdownSelectStyled = styled(Select)`
  &.react-dropdown-select {
    height: 48px;
    min-width: 224px;
    padding: 14px 18px;
    border-radius: 14px;
    background-color: rgba(247, 247, 251, 1);

    &:focus-within {
      box-shadow: unset;
    }
  }

  .react-dropdown-select-input,
  .react-dropdown-select-content {
    margin: 0;
    /* margin-top: 2px; */
    vertical-align: bottom;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    &::placeholder {
      color: #121417;
    }
  }

  .react-dropdown-select-item-selected {
    background: unset;
    color: black;
  }

  .react-dropdown-select-dropdown {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    margin-top: 4px;
    padding: 14px 18px;
    top: 100%;
    border-radius: 14px;
    color: #12141733;
    border: 1px solid rgba(18, 20, 23, 0.05);
    background: #fff;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    /* overflow: unset; */

    &::-webkit-scrollbar {
      width: 8px; /* Ширина скролбара */
    }

    &::-webkit-scrollbar-track {
      /* Колір фону скролбара */
    }

    &::-webkit-scrollbar-thumb {
      /* width: 8px; */
      background-color: rgba(
        18,
        20,
        23,
        0.05
      ); /* Колір самого бару прокрутки */
      border-radius: 10px; /* Округлені кути бару */
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(18, 20, 23, 0.1);
      /* Колір бару прокрутки при наведенні */
    }
  }

  /* & ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    height: 244px;
    overflow: auto;
  } */

  .react-dropdown-select-item:hover,
  .react-dropdown-select-item:focus {
    color: black;
    background: none;
    border-radius: 14px;
  }
`;
