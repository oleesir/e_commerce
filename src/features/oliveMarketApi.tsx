import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_API;
const baseQuery = fetchBaseQuery({ baseUrl, credentials: 'include' });

export const oliveMarketApi = createApi({
  reducerPath: 'oliveMarketApi',
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body: { firstName: string; lastName: string; email: string; password: string }) => {
        return {
          url: 'auth/signup',
          method: 'POST',
          body,
        };
      },
    }),
    login: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body,
        };
      },
    }),
    loadUser: builder.query({
      query: () => {
        return {
          url: 'auth/me',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLoadUserQuery } = oliveMarketApi;
