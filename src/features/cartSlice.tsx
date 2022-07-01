import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, ProductInfo } from "../types/productTypes";

export const initialState: CartState = {
	cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || "") : [],
	error: null,
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state: any, action: PayloadAction<ProductInfo>) => {
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

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		decreaseItems: (state: any, action: PayloadAction<ProductInfo>) => {
			const itemIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);

			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter((item: any) => item._id !== action.payload._id);
				state.cartItems = nextCartItems;
			}

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
	},
	extraReducers: {},
});

export const { addToCart, decreaseItems } = cartSlice.actions;
export default cartSlice.reducer;
