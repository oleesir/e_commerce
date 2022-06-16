import { createSlice } from "@reduxjs/toolkit";
import ProductService from "../services/product.services";
import { ProductState } from "../types/productTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const initialState: ProductState = {
	products: [],
	isLoading: false,
	error: null,
};

export const getAllProducts = createAsyncThunk("/products", async (_, { rejectWithValue }) => {
	try {
		const res = await ProductService.getProducts();
		return res.data.data;
	} catch (error: any) {
		return rejectWithValue(error.response?.data);
	}
});

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProducts.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(getAllProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});

		builder.addCase(getAllProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export default productSlice.reducer;
