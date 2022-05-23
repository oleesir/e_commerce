import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UnAuthorized from "./pages/UnAuthorized";
import AdminLayout from "./pages/AdminLayout";
import Account from "./pages/Account";
import SignupPage from "./pages/SignupPage";
import Favourites from "./pages/Favourites";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Search from "./pages/Search";
import "./App.css";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true; // removes the `xs` breakpoint
		sm: true;
		md: true;
		lg: true;
		xl: true;
		mobile: true; // adds the `mobile` breakpoint
		tablet: true;
		laptop: true;
		desktop: true;
	}
}

const theme = createTheme({
	palette: {
		text: {
			primary: "#072F40",
			secondary: "#5F738C",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			mobile: 0,
			tablet: 768,
			laptop: 1024,
			desktop: 1200,
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/" element={<LandingPage />}>
							<Route path="home" element={<HomePage />} />
							<Route path="account" element={<Account />} />
							<Route path="orders" element={<Orders />} />
							<Route path="favourites" element={<Favourites />} />
							<Route path="categories" element={<Categories />} />
							<Route path="/search" element={<Search />} />
						</Route>
						<Route path="/admin" element={<AdminLayout />}>
							<Route element={<PrivateRoute allowedRoles={["admin"]} />}>
								<Route path="dashboard" element={<AdminDashboard />} />
							</Route>
							<Route element={<PrivateRoute allowedRoles={["admin"]} />}>
								<Route path="products" element={<Products />} />
							</Route>
							<Route element={<PrivateRoute allowedRoles={["admin"]} />}>
								<Route path="users" element={<Users />} />
							</Route>
						</Route>
						<Route path="/unauthorized" element={<UnAuthorized />} />
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;
