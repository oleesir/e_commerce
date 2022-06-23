import React, { useState, useEffect } from "react";
import { Grid, Box, Divider } from "@mui/material";
import { getSingleProduct } from "../../features/productSlice";
import { addToCart } from "../../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Loader from "../../components/Loader";
import ReviewCards from "../../components/ReviewCards";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
	Container,
	ProductImg,
	Name,
	Description,
	Brand,
	Price,
	Ratings,
	AddToCartBtn,
	DescriptionHeaderContent,
	AddSubBtn,
	RemoveIconStyle,
	AddIconStyle,
	NumValueContent,
	// InputFieldStyles,
	// InputFieldContent,
	// InputFieldLabel,
	// FormControlStyle,
	// SelectStyle,
	// MenuItemStyle,
	// InputTextArea,
	// FormHeader,
	TopForm,
	SecondContent,
	FirstContent,
	DescriptionHeader,
	AddSubContent,
} from "./styles";

const SingleProduct = () => {
	const dispatch = useAppDispatch();
	const { state }: { state: any } = useLocation();
	// const [rating, setRating] = useState("");
	const { product, isLoading } = useAppSelector((state: any) => state.product);
	const { cartItems } = useAppSelector((state: any) => state.cart);
	const { productId } = state;

	useEffect(() => {
		const getData = () => {
			dispatch(getSingleProduct(productId));
		};
		if (productId) {
			getData();
		}
	}, [productId, dispatch]);

	const foundItem = cartItems.find((item: any) => item._id === productId);

	// const handleChange = (event: any) => {
	// 	setRating(event.target.value as string);
	// };
	// const foundItem = cartItems.find((item: any) => item._id === productId);

	// console.log("CART ITEMS", cartItems);
	// console.log("FOUND ITEMS", foundItem);
	// console.log("FOUND ITEMS", foundItem);

	const handleAddToCart = async () => {
		dispatch(addToCart(product));

		// const data = await dispatch(getSingleProduct(productId));

		// if(data.countInStock )
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
								<Price>
									Price:
									{new Intl.NumberFormat("en-NG", {
										style: "currency",
										currency: "NGN",
									}).format(product?.price)}
								</Price>
								<Ratings> Ratings</Ratings>
								{cartItems.length === 0 && <AddToCartBtn onClick={handleAddToCart}>Add Cart</AddToCartBtn>}
								{cartItems.length > 0 && (
									<AddSubContent>
										<AddSubBtn>
											<RemoveIconStyle />
										</AddSubBtn>
										<NumValueContent>
											<Price>{foundItem?.cartQuantity}</Price>
										</NumValueContent>
										<AddSubBtn onClick={handleAddToCart}>
											<AddIconStyle />
										</AddSubBtn>
									</AddSubContent>
								)}

								<DescriptionHeaderContent>
									<DescriptionHeader> Description</DescriptionHeader>
									<Divider />
								</DescriptionHeaderContent>

								<Description>{product?.description}</Description>
							</Box>
						</TopForm>

						<Grid item>
							<ReviewCards smallScreen={true} />
							{/* <Box>
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
							</Box> */}
						</Grid>
					</SecondContent>
				</Container>
			)}
		</>
	);
};

export default SingleProduct;
