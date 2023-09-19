import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

export const DatalistInputTwo = ({
  labelText,
  dropdownData,
  inputHandler,
  placeholderText,
  inpuWwidth,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [filter, setFilter] = useState('');
  // console.log('DatalistInputTwo', dropdownData);

  const filteredData = dropdownData.filter(make =>
    make.toLowerCase().includes(filter.toLowerCase())
  );

  const focusTogler = () => {
    const timeoutId = setTimeout(() => {
      setIsActive(state => !state);
    }, 200);

    return () => clearTimeout(timeoutId);
  };

  const filterHandler = e => {
    e.preventDefault();
    const filter = e.target;

    setFilter(filter.value);
  };

  const onClickHandler = e => {
    e.preventDefault();
    const make = e.target;

    setFilter(make.innerText);
    inputHandler(make.innerText);
  };

  return (
    <InputContainer style={{ maxWidth: inpuWwidth }}>
      <LableStyled htmlFor={labelText}>{labelText}</LableStyled>
      <InputStyled
        id={labelText}
        onFocus={focusTogler}
        onBlur={focusTogler}
        onChange={filterHandler}
        value={filter}
        placeholder={placeholderText}
        autoComplete="off"
      />
      {isActive && (
        <DropdownBox>
          <DropdownList>
            {filteredData.length
              ? filteredData.map(car => (
                  <li key={uuidv4()} onClick={onClickHandler}>
                    {car}
                  </li>
                ))
              : 'No Search Results'}
          </DropdownList>
        </DropdownBox>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  flex-basis: 224px;
`;

const LableStyled = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.285;
`;

const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 18px;
  border: unset;
  border-radius: 14px;
  background: #f7f7fb;
  color: rgba(18, 20, 23, 1);
  font-family: 'Manrope';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111;

  &::placeholder {
    color: rgba(18, 20, 23, 1);
  }

  &:focus-visible {
    outline: 1px solid rgba(138, 138, 137, 0.2);
  }
`;

const DropdownBox = styled.div`
  z-index: 999;
  position: absolute;
  top: 100%;
  width: 100%;
  box-sizing: border-box;
  max-height: 272px;
  padding: 14px 8px 14px 18px;
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 244px;
  overflow: auto;
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;

  & > li:hover,
  li:focus {
    color: rgba(18, 20, 23, 1);
  }

  &::-webkit-scrollbar {
    width: 8px; /* Ширина скролбара */
  }

  &::-webkit-scrollbar-track {
    /* Колір фону скролбара */
  }

  &::-webkit-scrollbar-thumb {
    /* width: 8px; */
    background-color: rgba(18, 20, 23, 0.05); /* Колір самого бару прокрутки */
    border-radius: 10px; /* Округлені кути бару */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(18, 20, 23, 0.1);
    /* Колір бару прокрутки при наведенні */
  }
`;
