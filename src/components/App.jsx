import advertsCars from '../data/advertsCars.json';

export const App = () => {
  console.log(advertsCars.sort((a, b) => a.id - b.id));
  const oneCar = advertsCars[10];
  console.log(oneCar);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <div
        style={{
          outline: '1px solid  darkblue',

          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          width: '274px',
          height: '426px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '268px',
            // marginBottom: '14px',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          <img
            src={oneCar.img}
            alt={oneCar.model}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '16px',
              lineHeight: 1.5,
            }}
          >
            <p>
              {oneCar.make} <span>{oneCar.model}</span>, {oneCar.year}
            </p>
            <p>{oneCar.rentalPrice}</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}
          >
            <ul
              style={{
                display: 'flex',
                fontSize: '12px',
                lineHeight: 1.5,
                color: 'rgba(18, 20, 23, 0.50)',

                flexWrap: 'wrap',
                columnGap: '12px',
                rowGap: '4px',
              }}
            >
              <li>{oneCar.address.split(',')[1]}</li>
              <li>{oneCar.address.split(',')[2]}</li>
              <li>{oneCar.rentalCompany}</li>
              <li>{oneCar.type}</li>
              <li>{oneCar.model}</li>
              <li>{oneCar.id}</li>
              <li>{oneCar.accessories[1].split(' ').splice(2, 2).join(' ')}</li>
            </ul>
            <button
              type="button"
              style={{
                width: '100%',
                fontSize: '14px',
                paddingTop: '12px',
                paddingBottom: '12px',

                borderRadius: 12,
              }}
            >
              Learn more
            </button>
          </div>
        </div>
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
