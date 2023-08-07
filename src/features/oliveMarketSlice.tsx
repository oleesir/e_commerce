import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '../types.ts';

export const initialState: CartState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems') || '')
    : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, action: PayloadAction<Product>) => {
      const foundIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);
      const isItemInCart = foundIndex !== -1;

      if (isItemInCart) {
        state.cartItems[foundIndex] = {
          ...state.cartItems[foundIndex],
          cartQuantity: (state.cartItems[foundIndex].cartQuantity += 1),
        };
      } else {
        let newItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newItem);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseItem: (state: any, action: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        let nextCartItems: any;
        nextCartItems = state.cartItems.filter((item: any) => item._id !== action.payload._id);
        state.cartItems = nextCartItems;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotalQuantity: (state: any) => {
      let totalQuantity: number;
      totalQuantity = state.cartItems.reduce((acc: any, item: any) => {
        return acc + item.cartQuantity;
      }, 0);

      state.cartTotalQuantity = totalQuantity;
    },
  },
});

export const { addToCart, decreaseItem, getTotalQuantity } = cartSlice.actions;
export default cartSlice.reducer;
