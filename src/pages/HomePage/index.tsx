import * as React from "react";
import { useAppSelector } from "../../store";
import Card from "../../components/Cards/Card";

import { Grid } from "@mui/material";
import CategoryLinks from "../../components/CategoryLinks";
import { Wrapper, Container, WrapperItem } from "./styles";
const HomePage = () => {
	const { isAuth, user, isLoading, isLoadingBtn } = useAppSelector((state: any) => state.auth);
	console.log("USER", user);
	return (
		<Wrapper container spacing={2}>
			<WrapperItem item md={2}>
				<CategoryLinks />
			</WrapperItem>

			<Grid item md={10} sm={12} xs={12} sx={{ backgroundColor: "#fff" }}>
				<Container container item spacing={2}>
					<Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
					<Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
					<Card /> <Card /> <Card /> <Card /> <Card /> <Card />
				</Container>
			</Grid>
		</Wrapper>
	);
};

export default HomePage;
