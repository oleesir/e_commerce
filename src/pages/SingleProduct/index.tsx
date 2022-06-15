import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import ReviewCards from "../../components/ReviewCards";

import {
	Container,
	ProductImg,
	Name,
	Description,
	Brand,
	Price,
	Ratings,
	AddToCartBtn,
	InputFieldStyles,
	InputFieldContent,
	InputFieldLabel,
	FormControlStyle,
	SelectStyle,
	MenuItemStyle,
	InputTextArea,
	FormHeader,
	TopForm,
	SecondContent,
	FirstContent,
} from "./styles";

const SingleProduct = () => {
	const [rating, setRating] = useState("");

	const handleChange = (event: any) => {
		setRating(event.target.value as string);
	};

	return (
		<Container container md={12}>
			<FirstContent container md={6} direction="column">
				<ProductImg src="iphone.jpeg" alt="product" />
				<ReviewCards bigScreen={true} />
			</FirstContent>
			<SecondContent container md={6} direction="column">
				<TopForm item>
					<Name>Apple Iphone Xs Max 64gb 4gb Ram Silver Case and Screen Guide</Name>
					<Brand>Brand: Apple</Brand>
					<Price> Price: N500,000</Price>
					<Ratings> Ratings</Ratings>
					<Description>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</Description>

					<AddToCartBtn>Add Cart</AddToCartBtn>
				</TopForm>

				<Grid item>
					<ReviewCards smallScreen={true} />
					<FormHeader>CUSTOMER REVIEW</FormHeader>
					<InputFieldContent>
						<InputFieldLabel>Name</InputFieldLabel>
						<InputFieldStyles />
					</InputFieldContent>

					<InputFieldContent>
						<InputFieldLabel>Ratings</InputFieldLabel>
						<FormControlStyle>
							<SelectStyle value={rating} onChange={handleChange}>
								<MenuItemStyle value={1}>Poor</MenuItemStyle>
								<MenuItemStyle value={2}>Fair</MenuItemStyle>
								<MenuItemStyle value={3}>Good</MenuItemStyle>
								<MenuItemStyle value={4}>Very Good </MenuItemStyle>
								<MenuItemStyle value={5}>Excellent</MenuItemStyle>
							</SelectStyle>
						</FormControlStyle>
					</InputFieldContent>
					<InputFieldContent>
						<InputFieldLabel>Comment</InputFieldLabel>
						<InputTextArea aria-label="minimum height" minRows={10} />
					</InputFieldContent>

					<AddToCartBtn>Submit</AddToCartBtn>
				</Grid>
			</SecondContent>
		</Container>
	);
};

export default SingleProduct;
