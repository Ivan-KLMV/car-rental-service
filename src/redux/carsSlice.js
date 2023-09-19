import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6481ca7029fa1c5c503214c9.mockapi.io',
  }),
  tagTypes: ['Cars'],
  endpoints: builder => ({
    getCars: builder.query({
      query: () => `/advert`,
      providesTags: ['Cars'],
    }),
    getCarsById: builder.query({
      query: id => `/advert/${id}`,
      providesTags: ['Cars'],
    }),
    addToFavoriteCar: builder.mutation({
      query: car => ({
        url: `/advert/${car.id}`,
        method: 'PUT',
        body: car,
      }),
      invalidatesTags: ['Cars'],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarsByIdQuery,
  useAddToFavoriteCarMutation,
} = carsApi;
