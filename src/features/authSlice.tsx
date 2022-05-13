import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/auth.services";
import { AuthState, LoginInfo } from "../types/authTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "../constant";

export const initialState: AuthState = {
	user: null,
	isLoading: false,
	isLoadingBtn: false,
	isAuth: false,
	errors: null,
};

export const loginUser = createAsyncThunk("auth/login", async (formData: LoginInfo, { rejectWithValue }) => {
	try {
		const res = await AuthService.signinUser(formData);
		return res.data.data;
	} catch (error: any) {
		return rejectWithValue(error.response?.data);
	}
});

export const loadUser = createAsyncThunk("auth/loggedin", async (_, { rejectWithValue }) => {
	try {
		const res = await AuthService.loggedIn();
		return res.data.data;
	} catch (error: any) {
		return rejectWithValue(error.response?.data);
	}
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state) => {
			state.isLoadingBtn = true;
			state.isAuth = false;
		});

		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.isLoadingBtn = false;
			state.isAuth = true;
			state.user = action.payload;
		});

		builder.addCase(loginUser.rejected, (state, action) => {
			state.isLoadingBtn = false;
			state.errors = action.payload;
		});

		builder.addCase(loadUser.pending, (state) => {
			state.isLoading = true;
			state.isAuth = false;
		});

		builder.addCase(loadUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isAuth = !!action.payload;
			state.user = action.payload;
		});

		builder.addCase(loadUser.rejected, (state, action) => {
			state.isLoading = false;
			state.isAuth = false;
			state.errors = action.payload;
		});
	},
});

export default authSlice.reducer;
