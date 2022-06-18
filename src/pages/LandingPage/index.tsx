import React from "react";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const LandingPage = () => {
	let location = useLocation();
	return (
		<Grid
			container
			md={12}
			flexDirection="column"
			sx={{
				backgroundColor: "#fff",
				pt: location.pathname === "/login" || location.pathname === "/signup" ? 0 : "100px",
			}}
		>
			<NavBar />
			<Outlet />
		</Grid>
	);
};

export default LandingPage;
