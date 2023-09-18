import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import advertsCars from '../../data/advertsCars.json';
import makes from '../../data/makes.json';
import styled from 'styled-components';

export const DatalistInputTwo = () => {
  const [isActive, setIsActive] = useState(false);
  const [filter, setFilter] = useState('');
  const filteredMakes = makes.filter(make =>
    make.toLowerCase().includes(filter.toLowerCase())
  );
  const focusTogler = () => {
    const timeoutId = setTimeout(() => {
      setIsActive(state => !state);
    }, 250);

    return () => clearTimeout(timeoutId);
  };

  const filterHandler = e => {
    e.preventDefault();
    const filter = e.target;
    // console.log(filter.value);
    setFilter(filter.value);
  };

  const onClickHandler = e => {
    e.preventDefault();
    const make = e.target;
    console.dir(make.innerText);
    setFilter(make.innerText);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        position: 'relative',
        flexBasis: '224px',
      }}
    >
      <LableStyled htmlFor="car-brand">Car brand</LableStyled>
      <InputStyled
        id="car-brand"
        onFocus={focusTogler}
        onBlur={focusTogler}
        onChange={filterHandler}
        value={filter}
        placeholder="Enter the text"
        autoComplete="off"
      />
      {isActive && (
        <DropdownBox
        // style={{
        //   boxSizing: 'border-box',
        //   position: 'absolute',
        //   top: '100%',
        //   width: '100%',
        //   maxHeight: '272px',
        //   padding: '14px 8px 14px 18px',
        //   backgroundColor: 'whitesmoke',
        // }}
        >
          <DropdownList
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              maxHeight: '244px',
              overflow: 'auto',

              color: 'rgba(18, 20, 23, 0.2)',
            }}
          >
            {filteredMakes.length
              ? filteredMakes.map(car => (
                  <li key={uuidv4()} onClick={onClickHandler}>
                    {car}
                  </li>
                ))
              : 'No Search Results'}
          </DropdownList>
        </DropdownBox>
      )}
    </div>
  );
};

const LableStyled = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 89px 14px 18px;
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
`;
const DropdownBox = styled.div`
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
