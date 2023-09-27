import '@testing-library/jest-dom';
// make debug output for TestingLibrary Errors larger
import { server } from './mocks/api/server.ts';
// import { oliveMarketApi } from './features/oliveMarketApi.tsx';
// import { setupStore } from './store.ts';

// const store = setupStore({});

/** Add any global mocks needed for the test suite here */

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen());
afterEach(() => {
  return server.resetHandlers();
  //clear cache after each test
  // store.dispatch(oliveMarketApi.util.resetApiState());
});
afterAll(() => server.close());
