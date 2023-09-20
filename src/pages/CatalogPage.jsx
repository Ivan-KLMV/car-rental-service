import { LoadMoreButton } from 'components/Buttons/ButtonStytled';
import { Card } from 'components/Card/Card';
import { useState } from 'react';
import { useGetCarsPaginationQuery, useGetCarsQuery } from 'redux/carsSlice';

export const CatalogPage = ({ searchQuery }) => {
  const [limit, setLimit] = useState(8);
  const { make } = searchQuery;
  // console.log(make);
  const { data: totalData } = useGetCarsQuery();
  const { data: rentalCars } = useGetCarsPaginationQuery(limit, make);
  const totalPages = Math.ceil(totalData?.length);

  // console.log(totalData);
  return (
    rentalCars && (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            columnGap: '29px',
            rowGap: '50px',
            marginBottom: 100,
          }}
        >
          {rentalCars.map(car => (
            <Card key={car.id} {...car} />
          ))}
        </div>
        {totalPages > limit && (
          <LoadMoreButton
            type="button"
            onClick={() => {
              setLimit(prevLimit => prevLimit + 8);
            }}
          >
            Load more
          </LoadMoreButton>
        )}
      </div>
    )
  );
};
