import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth.services";
import { AuthState, LoginInput, SignupInput } from "../types/authTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const initialState: AuthState = {
	user: null,
	isLoading: false,
	isLoadingBtn: false,
	isAuth: false,
	error: null,
};

export const signupUser = createAsyncThunk("auth/signup", async (formData: SignupInput, { rejectWithValue }) => {
	try {
		const res = await AuthService.signupUser(formData);
		return res.data.data;
	} catch (error: any) {
		return rejectWithValue(error.response?.data);
	}
});

export const loginUser = createAsyncThunk("auth/login", async (formData: LoginInput, { rejectWithValue }) => {
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

export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		const res = await AuthService.logout();
		console.log("LOGOUT", res.data.data);
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
		clearServerMessage: (state: any) => {
			state.error = null;
			return state;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signupUser.pending, (state) => {
			state.isLoadingBtn = true;
			state.isAuth = false;
		});

		builder.addCase(signupUser.fulfilled, (state, action) => {
			state.isLoadingBtn = false;
			state.isAuth = true;
			state.user = action.payload;
		});

		builder.addCase(signupUser.rejected, (state, action) => {
			state.isLoadingBtn = false;
			state.error = action.payload;
		});

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
			state.error = action.payload;
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
			state.error = action.payload;
		});

		builder.addCase(logoutUser.pending, (state) => {
			state.isLoadingBtn = true;
		});

		builder.addCase(logoutUser.fulfilled, (state, action) => {
			state.isLoadingBtn = false;
			state.isAuth = false;
			state.user = action.payload;
		});

		builder.addCase(logoutUser.rejected, (state, action) => {
			state.isLoadingBtn = false;
			state.error = action.payload;
		});
	},
});

export const { clearServerMessage } = authSlice.actions;
export default authSlice.reducer;
