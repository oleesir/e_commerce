import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartInputState, CartState, ProductInfo} from "../types/productTypes";
import CartService from "../services/cart.services";

export const initialState: CartState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || "") : [],
    cartFromApi: null,
    error: null,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    isLoading: false,
};


export const addItemToCartApi = createAsyncThunk("/carts", async (formData: CartInputState, {rejectWithValue}) => {
    try {
        const res = await CartService.addToCartFromApi(formData);
        return res.data.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data);
    }
});

export const getUserCart = createAsyncThunk("/carts/userId", async (_, {rejectWithValue}) => {
    try {
        const res = await CartService.getUserCartFromApi();
        return res.data.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data);
    }
});

export const removeItemFromCartApi = createAsyncThunk("/carts/remove/productId", async (productId:string, {rejectWithValue}) => {
    try {
        const res = await CartService.removeItemFromCartApi(productId);
        return res.data.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data);
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: any, action: PayloadAction<ProductInfo>) => {
            const foundIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);
            const isItemInCart = foundIndex !== -1;

            if (isItemInCart ) {
                state.cartItems[foundIndex] = {
                    ...state.cartItems[foundIndex],
                    cartQuantity: state.cartItems[foundIndex].cartQuantity += 1,
                };
            } else {
                let newItem = {...action.payload, cartQuantity: 1};
                state.cartItems.push(newItem);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseItem: (state: any, action: PayloadAction<ProductInfo>) => {
            const itemIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                let nextCartItems: any;
                nextCartItems = state.cartItems.filter((item: any) => item._id !== action.payload._id);
                state.cartItems = nextCartItems;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotalQuantity: (state: any) => {
            let totalQuantity: number;
            totalQuantity = state.cartItems.reduce((acc: any, item: any) => {
                return acc + item.cartQuantity;
            }, 0);

            state.cartTotalQuantity = totalQuantity;
        },
        getTotalAmount: (state: any) => {
            let totalAmount: number;
            totalAmount = state.cartItems.reduce((acc: any, item: any) => {
                return acc + item.price * item.cartQuantity;
            }, 0);
            totalAmount = parseFloat(totalAmount.toFixed(2));

            state.cartTotalAmount = totalAmount;
        },
        removeItem:(state: any, action: PayloadAction<ProductInfo>)=>{
            let nextCartItems: any;
            nextCartItems = state.cartItems.filter((item: any) => item._id !== action.payload._id);
            state.cartItems = nextCartItems;

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearLocalStorageData: (state: any) => {
            state.cartItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addItemToCartApi.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(addItemToCartApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartFromApi = action.payload;
        });

        builder.addCase(addItemToCartApi.rejected, (state,action) => {
            state.isLoading = false;
            state.error=action.payload;
        });

        builder.addCase(getUserCart.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getUserCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartFromApi = action.payload;
        });

        builder.addCase(getUserCart.rejected, (state,action) => {
            state.isLoading = false;
            state.error=action.payload;
        });

        builder.addCase(removeItemFromCartApi.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(removeItemFromCartApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartFromApi = action.payload;
        });

        builder.addCase(removeItemFromCartApi.rejected, (state,action) => {
            state.isLoading = false;
            state.error=action.payload;
        });

    },
});

export const {addToCart, decreaseItem, getTotalQuantity, getTotalAmount, clearLocalStorageData,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
