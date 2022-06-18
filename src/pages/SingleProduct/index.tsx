import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { getSingleProduct } from "../../features/productSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Loader from "../../components/Loader";
import ReviewCards from "../../components/ReviewCards";
import { useLocation } from "react-router-dom";
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
	const dispatch = useAppDispatch();
	const { state }: { state: any } = useLocation();
	const [rating, setRating] = useState("");
	const { product, isLoading } = useAppSelector((state: any) => state.product);
	const { productId } = state;

	useEffect(() => {
		const getData = () => {
			dispatch(getSingleProduct(productId));
		};
		if (productId) {
			getData();
		}
	}, [productId, dispatch]);

	const handleChange = (event: any) => {
		setRating(event.target.value as string);
	};

	return (
		<>
			{isLoading && <Loader backgroundcolor="#fff" />}
			{!isLoading && (
				<Container container md={12}>
					<FirstContent container md={6} direction="column">
						<ProductImg src={product?.image} alt="product" />
						<ReviewCards bigScreen={true} />
					</FirstContent>
					<SecondContent container md={6} direction="column">
						<TopForm item>
							<Box>
								<Name>{product?.name}</Name>
								<Brand>Brand: {product?.brand}</Brand>
								<Price> Price: {product?.price}</Price>
								<Ratings> Ratings</Ratings>
								<Description>{product?.description}</Description>
								<AddToCartBtn>Add Cart</AddToCartBtn>
							</Box>
						</TopForm>

						<Grid item>
							<Box>
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
							</Box>
						</Grid>
					</SecondContent>
				</Container>
			)}
		</>
	);
};

export default SingleProduct;
