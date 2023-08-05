import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginInput, Product, SignupInput, User } from '../types.ts';

const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_API;
const baseQuery = fetchBaseQuery({ baseUrl, credentials: 'include' });

export const oliveMarketApi = createApi({
  reducerPath: 'oliveMarketApi',
  baseQuery,
  tagTypes: ['Users', 'Products'],
  endpoints: (builder) => ({
    signup: builder.mutation<void, SignupInput>({
      query: (body) => {
        return {
          url: 'auth/signup',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Users'],
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
      transformResponse: (response: any) => {
        const newResponse: User = response?.data;
        return { _id: newResponse?._id, email: newResponse?.email, role: newResponse?.role };
      },
      providesTags: ['Users'],
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: 'auth/logout',
          method: 'POST',
        };
      },
      invalidatesTags: ['Users'],
    }),
    getProducts: builder.query({
      query: () => {
        return {
          url: 'products',
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        const newResponse: Product[] = response?.data;
        return newResponse;
      },
      providesTags: ['Products'],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLoadUserQuery,
  useLogoutMutation,
  useGetProductsQuery,
} = oliveMarketApi;
