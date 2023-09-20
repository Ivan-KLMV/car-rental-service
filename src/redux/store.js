import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carsApi } from './carsSlice';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    searchParams: {},
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});

setupListeners(store.dispatch);
