import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CartInput,
  DecreaseItemFromCartInput,
  DeleteItemFromCartInput,
  LoginInput,
  Product,
  SignupInput,
  User,
} from '../types.ts';

const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_API;
const baseQuery = fetchBaseQuery({ baseUrl, credentials: 'include' });

export const oliveMarketApi = createApi({
  reducerPath: 'oliveMarketApi',
  baseQuery,
  tagTypes: ['Users', 'Products', 'Carts'],
  endpoints: (builder) => ({
    signup: builder.mutation<void, SignupInput>({
      query: (body) => {
        return {
          url: 'auth/signup',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Users', 'Carts', 'Products'],
    }),
    login: builder.mutation<void, LoginInput>({
      query: (body) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Users', 'Products'],
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
        return {
          _id: newResponse?._id,
          email: newResponse?.email,
          role: newResponse?.role,
          cartId: newResponse?.cartId,
        };
      },
      providesTags: ['Users', 'Products', 'Carts'],
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
      providesTags: ['Products', 'Carts'],
    }),
    getProduct: builder.query({
      query: (_id) => {
        return {
          url: `products/${_id}`,
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        const newResponse: Product = response?.data;
        return newResponse;
      },
      providesTags: ['Products', 'Carts'],
    }),
    getUserCart: builder.query({
      query: (cartId) => {
        return {
          url: `carts/user_cart/${cartId}`,
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response?.data;
      },
      providesTags: ['Products', 'Carts'],
    }),
    incrementItemInCartApi: builder.mutation<void, CartInput>({
      query: (body) => {
        return {
          url: 'carts',
          method: 'POST',
          body,
        };
      },
      transformResponse: (response: any) => {
        return response?.data;
      },
      invalidatesTags: ['Products', 'Carts'],
    }),
    decrementItemInCartApi: builder.mutation<void, DecreaseItemFromCartInput>({
      query: (body) => {
        return {
          url: 'carts/decrease',
          method: 'POST',
          body,
        };
      },
      transformResponse: (response: any) => {
        return response?.data;
      },
      invalidatesTags: ['Products', 'Carts'],
    }),
    deleteItemInCartApi: builder.mutation<void, DeleteItemFromCartInput>({
      query: (body) => {
        return {
          url: `carts/remove`,
          method: 'DELETE',
          body,
        };
      },

      invalidatesTags: ['Carts'],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLoadUserQuery,
  useLogoutMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useGetUserCartQuery,
  useDecrementItemInCartApiMutation,
  useIncrementItemInCartApiMutation,
  useDeleteItemInCartApiMutation,
} = oliveMarketApi;
