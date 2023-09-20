import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carsApi } from './carsSlice';

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
