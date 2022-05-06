import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import "./App.css";

const theme = createTheme({
	palette: {
		text: {
			primary: "#072F40",
			secondary: "#5F738C",
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
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;
