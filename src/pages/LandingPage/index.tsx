import React from "react";
import { Grid, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Wrapper } from "./styles";

const LandingPage = () => {
	let location = useLocation();
	return (
		<Wrapper container md={12} flexDirection="column">
			<Box sx={{ height: "100vh", width: "100%" }}>
				<NavBar />
				<Outlet />
			</Box>
		</Wrapper>
	);
};

export default LandingPage;
