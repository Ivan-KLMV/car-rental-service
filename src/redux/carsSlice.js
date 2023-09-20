import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6481ca7029fa1c5c503214c9.mockapi.io',
  }),
  tagTypes: ['Cars', 'Fav'],
  endpoints: builder => ({
    getCars: builder.query({
      query: () => `/advert`,
      providesTags: ['Cars'],
    }),
    getCarsPagination: builder.query({
      query: (limit = 8, make = '') => `/advert/?l=${limit}&p=1&make=${make}`,

      providesTags: ['Cars'],
    }),
    getFavoritesCars: builder.query({
      query: () => `/advert/?favorite=true`,
      providesTags: ['Fav'],
    }),
    getFavoritesCarsPagination: builder.query({
      query: (limit = 8) => `/advert/?favorite=true&l=${limit}&p=1`,
      providesTags: ['Fav'],
    }),

    // getCarsById: builder.query({
    //   query: id => `/advert/${id}`,
    //   providesTags: ['Cars'],
    // }),
    addToFavoriteCar: builder.mutation({
      query: car => ({
        url: `/advert/${car.id}`,
        method: 'PUT',
        body: car,
      }),
      invalidatesTags: ['Cars', 'Fav'],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarsPaginationQuery,
  useGetFavoritesCarsQuery,
  useGetFavoritesCarsPaginationQuery,
  useAddToFavoriteCarMutation,
} = carsApi;
