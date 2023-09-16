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
          quantity: (state.cartItems[foundIndex].quantity += 1),
        };
      } else {
        let newItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(newItem);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseItem: (state: any, action: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        let nextCartItems: any;
        nextCartItems = state.cartItems.filter((item: any) => item._id !== action.payload._id);
        state.cartItems = nextCartItems;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotalQuantity: (state: any) => {
      let totalQuantity: number;
      totalQuantity = state.cartItems.reduce((acc: any, item: any) => {
        return acc + item.quantity;
      }, 0);

      state.totalQuantity = totalQuantity;
    },
    getTotalAmount: (state: any) => {
      let totalAmount: number;
      totalAmount = state.cartItems.reduce((acc: any, item: any) => {
        return acc + item.price * item.quantity;
      }, 0);
      totalAmount = parseFloat(totalAmount.toFixed(2));

      state.totalAmount = totalAmount;
    },
    removeItem: (state: any, action: PayloadAction<Product>) => {
      let nextCartItems: any;
      nextCartItems = state.cartItems.filter((item: any) => item._id !== action.payload._id);
      state.cartItems = nextCartItems;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearLocalStorageData: (state: any) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  decreaseItem,
  getTotalQuantity,
  getTotalAmount,
  clearLocalStorageData,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
