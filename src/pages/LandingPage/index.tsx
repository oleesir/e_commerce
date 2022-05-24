import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const LandingPage = () => {
	return (
		<Grid container md={12} flexDirection="column" sx={{ backgroundColor: "#F5F5F5", pt: "120px" }}>
			<NavBar />
			<Grid sx={{ pt: "10px" }}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default LandingPage;
