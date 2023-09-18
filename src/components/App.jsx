import advertsCars from '../data/advertsCars.json';
import makes from '../data/makes.json';
import { Card } from './Card/Card';
import { SearchForm } from './SearchForm/SearchForm';

export const App = () => {
  console.log(advertsCars.sort((a, b) => a.id - b.id));
  const oneCar = advertsCars[10];
  console.log(oneCar);
  const rentalPrices = advertsCars.map(({ id, rentalPrice }) => ({
    id,
    rentalPrice,
  }));
  console.log(rentalPrices);
  return (
    <div
      style={{
        // height: '100vh',
        maxWidth: '1440px',
        padding: '150px 128px',
      }}
    >
      <SearchForm {...{ makes, rentalPrices }} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '29px',
          rowGap: '50px',
          justifyContent: 'center',
        }}
      >
        {advertsCars.map(car => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

// {"id": 9629,
// "year": 2009,
// "make": "Lamborghini",
// "model": "Murcielago",
// "type": "Convertible",
// "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/lamborghini_murcielago.webp",
// "description": "The Lamborghini Murcielago is an exotic and high-performance convertible that represents the epitome of Italian automotive engineering, combining breathtaking design, blistering speed, and a spine-tingling exhaust note.",
// "fuelConsumption": "25.0",
// "engineSize": "6.5L V12",
// "accessories": [
//   "Carbon-fiber body panels",
//   "Alcantara upholstery",
//   "Lamborghini Infotainment System"
// ],
// "functionalities": [
//   "All-Wheel Drive",
//   "Electronic Stability Control",
//   "Retractable soft-top roof"
// ],
// "rentalPrice": "$500",
// "rentalCompany": "Supercar Rentals",
// "address": "321 Example Road, Kharkiv, Ukraine",
// "rentalConditions": "Minimum age: 30\nValid driver's license\nSecurity deposit and insurance required",
// "mileage": 5832
// }
