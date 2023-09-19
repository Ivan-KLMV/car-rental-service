import { useGetCarsQuery } from 'redux/carsSlice';
import { Card } from './Card/Card';
import { SearchForm } from './SearchForm/SearchForm';

export const App = () => {
  const { data: rentalCars, error, isLoading } = useGetCarsQuery();
  // console.log('data', rentalCars);
  console.log('isLoading', isLoading);
  // console.log(advertsCars.sort((a, b) => a.id - b.id));

  const rentalPrices =
    rentalCars && rentalCars.map(({ rentalPrice }) => rentalPrice);
  // console.log(rentalPrices);
  return (
    rentalCars && (
      <div
        style={{
          maxWidth: '1440px',
          padding: '150px 128px',
        }}
      >
        <SearchForm {...{ rentalPrices }} />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '29px',
            rowGap: '50px',
            justifyContent: 'center',
            '&:lastChild': { justifyContent: 'flex-start' },
          }}
        >
          {rentalCars.map(car => (
            <Card key={car.id} {...car} />
          ))}
        </div>
      </div>
    )
  );
};
