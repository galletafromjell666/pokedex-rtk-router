import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokeApi } from './features/pokeApiSlice';
import queryLimitReducer from './features/queryLimitSlice'
export const store = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
    queryLimit: queryLimitReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pokeApi.middleware),
});

setupListeners(store.dispatch);
