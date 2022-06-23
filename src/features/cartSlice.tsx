import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types/productTypes";

export const initialState: CartState = {
	cartItems: [],
	error: null,
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state: any, actions: any) => {
			// console.log("CART", actions.payload);
			const itemIndex = state.cartItems.findIndex((item: any) => item._id === actions.payload._id);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
			} else {
				const newItem = { ...actions.payload, cartQuantity: 1 };
				state.cartItems.push(newItem);
			}
		},
	},
	extraReducers: {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
