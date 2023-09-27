import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { oliveMarketApi } from './features/oliveMarketApi.tsx';
import cartSlice from './features/oliveMarketSlice.tsx';

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [oliveMarketApi.reducerPath]: oliveMarketApi.reducer,
  cart: cartSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(oliveMarketApi.middleware),
    preloadedState,
  });
};
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
