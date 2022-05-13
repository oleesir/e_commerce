import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UnAuthorized from "./pages/UnAuthorized";
import "./App.css";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: false; // removes the `xs` breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;
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
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route element={<PrivateRoute allowedRoles={["admin"]} />}>
							<Route path="/dashboard" element={<AdminDashboard />} />
						</Route>
						<Route path="/unauthorized" element={<UnAuthorized />} />
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;
