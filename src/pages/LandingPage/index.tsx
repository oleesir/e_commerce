import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const LandingPage = () => {
	return (
		<Grid container md={12} flexDirection="column">
			<NavBar />
			<Outlet />
		</Grid>
	);
};

export default LandingPage;
