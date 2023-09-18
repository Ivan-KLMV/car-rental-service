import Select from 'react-dropdown-select';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useState } from 'react';
import { DatalistInput } from 'components/DatalistInput/DatalistInput';
import { DatalistInputTwo } from 'components/DatalistInput/DatalistInputTwo';

export const SearchForm = props => {
  const [selectedCar, setSelectedCar] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  const handleChangeCar = values => {
    console.log('in form', values);
    setSelectedCar(values);
  };

  const handleChangePrice = values => {
    setSelectedPrice(values);
  };
  return (
    <form style={{ display: 'flex', gap: 18 }}>
      <DatalistInputTwo />
      <DatalistInput
        options={props.makes}
        labelName="Car brand"
        selectedItems={selectedCar}
        placeholderText="Enter the text"
        handleChange={handleChangeCar}
      />
      <DatalistInput
        options={props.rentalPrices}
        labelName="Price/ 1 hour"
        selectedItems={selectedPrice}
        placeholderText="To $"
        handleChange={handleChangePrice}
      />
    </form>
  );
};
