import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from '../store.ts';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupStore } from '../store.ts';
import { createSelector } from '@reduxjs/toolkit';
import { Api } from '@reduxjs/toolkit/query';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

// TODO: Fix state declarations
export const getTestStoreState = ({
  store,
  api,
  stateKey,
}: {
  store: ToolkitStore;
  api: Api<any, any, any, any, any>;
  stateKey: string;
}) => {
  // @ts-ignore
  if (!api.endpoints[stateKey]) {
    throw new Error('state key does not exist in api');
  }

  const currentState = store.getState();
  const selectResult = createSelector(api.endpoints[stateKey].select(), (result) => result ?? {});

  // @ts-ignore
  return selectResult(currentState);
};
