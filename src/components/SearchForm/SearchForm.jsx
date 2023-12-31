import { useState } from 'react';
import { DatalistInputTwo } from 'components/DatalistInput/DatalistInputTwo';
import { InputMileage } from 'components/InputMileage/InputMileage';
import { SearchButton } from 'components/Buttons/ButtonStytled';
import makes from '../../data/makes.json';
import { generateRange } from 'utilites/generateRange';

export const SearchForm = ({ onSubmitHandler }) => {
  const rentalPrices = generateRange(20, 500, 10);
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMileageFrom, setSelectedMileageFrom] = useState(0);
  const [selectedMileageTo, setSelectedMileageTo] = useState(0);
  const handleChangeCar = values => {
    // console.log('in form car', values);
    setSelectedCar(values);
  };

  const handleChangePrice = values => {
    // console.log('in form price', values);

    setSelectedPrice(values);
  };

  const handleChangeMileage = values => {
    // console.log('in form mileage from', values);

    if (values.name === 'from') {
      return setSelectedMileageFrom(Number(values.value));
    }

    if (values.name === 'to') {
      return setSelectedMileageTo(Number(values.value));
    }
    // setSelectedMileageFrom(values);
  };

  return (
    // <div
    //   style={{ display: 'flex', justifyContent: 'center', }}
    // >
    <form
      style={{
        display: 'flex',
        gap: 18,
        justifyContent: 'center',
        marginBottom: 50,
      }}
      onSubmit={e => {
        e.preventDefault();

        onSubmitHandler({
          make: selectedCar,
          selectedPrice,
          selectedMileageFrom,
          selectedMileageTo,
        });
      }}
    >
      <DatalistInputTwo
        labelText="Car brand"
        dropdownData={makes}
        inputHandler={handleChangeCar}
        placeholderText="Enter the text"
      />
      <DatalistInputTwo
        labelText="Price/ 1 hour"
        dropdownData={rentalPrices}
        inputHandler={handleChangePrice}
        placeholderText="To $"
        inpuWwidth={125}
      />
      <InputMileage inputHandler={handleChangeMileage} />
      <SearchButton type="submit">Search</SearchButton>
    </form>
    // </div>
  );
};
