import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginInput, SignupInput } from '../types.ts';

const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_API;
const baseQuery = fetchBaseQuery({ baseUrl, credentials: 'include' });

export const oliveMarketApi = createApi({
  reducerPath: 'oliveMarketApi',
  baseQuery,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    signup: builder.mutation<void, SignupInput>({
      query: (body) => {
        return {
          url: 'auth/signup',
          method: 'POST',
          body,
        };
      },
    }),
    login: builder.mutation<void, LoginInput>({
      query: (body) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Users'],
    }),
    loadUser: builder.query({
      query: () => {
        return {
          url: 'auth/me',
          method: 'GET',
        };
      },
      providesTags: ['Users'],
    }),
    // logout: builder.query({
    //   query: () => {
    //     return {
    //       url: 'auth/logout',
    //       method: 'GET',
    //     };
    //   },
    //   providesTags: ['Users'],
    // }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLoadUserQuery } = oliveMarketApi;
