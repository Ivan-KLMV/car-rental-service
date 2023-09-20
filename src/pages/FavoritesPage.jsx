import { LoadMoreButton } from 'components/Buttons/ButtonStytled';
import { Card } from 'components/Card/Card';
import { useState } from 'react';
import {
  useGetFavoritesCarsPaginationQuery,
  useGetFavoritesCarsQuery,
} from 'redux/carsSlice';

export const FavoritesPage = () => {
  const [limit, setLimit] = useState(8);

  const { data: totalData } = useGetFavoritesCarsQuery();
  const { data: rentalCars } = useGetFavoritesCarsPaginationQuery(limit);

  const totalPages = Math.ceil(totalData?.length);

  return (
    rentalCars && (
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
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
              //   setLimit(prevPage => prevPage + 1);
              setLimit(prevLimit => prevLimit + 8);
            }}
          >
            Load more
          </LoadMoreButton>
        )}
      </>
    )
  );
};
