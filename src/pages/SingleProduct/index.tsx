import React, { useState, useEffect } from "react";
import { Grid, Box, Divider } from "@mui/material";
import { getSingleProduct } from "../../features/productSlice";
import { addToCart, decreaseItem } from "../../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Loader from "../../components/Loader";
import ReviewCards from "../../components/ReviewCards";
import ProductImages from "../../components/ProductImages";
import { useLocation } from "react-router-dom";
import CarouselImages from "../../components/CarouselImages";
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
	AddBtn,
	SubBtn,
	RemoveIconStyle,
	AddIconStyle,
	NumValueContent,
	NumOfItemsContent,
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
	TopContent,
	ViewProductContent,
	ViewProductListContent,
} from "./styles";

const SingleProduct = () => {
	const dispatch = useAppDispatch();
	const { state }: { state: any } = useLocation();
	// const [rating, setRating] = useState("");

	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const { product, isLoading } = useAppSelector((state: any) => state.product);
	const [selectedImage, setSelectedImage] = useState("");
	const itemInCart = useAppSelector((state: any) =>
		state.cart.cartItems.find((item: any) => item._id === product?._id),
	);
	const { productId } = state;

	useEffect(() => {
		if (productId) {
			dispatch(getSingleProduct(productId));
		}
	}, [productId, dispatch]);

	useEffect(() => {
		if (itemInCart?.cartQuantity >= product?.countInStock) {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [itemInCart?.cartQuantity, product?.countInStock]);

	useEffect(() => {
		if (productId) {
			dispatch(getSingleProduct(productId));
		}
	}, [productId, dispatch]);

	const handleAddToCart = (event: any) => {
		dispatch(addToCart(product));
	};

	const handleDecreaseItem = (event: any) => {
		dispatch(decreaseItem(product));
	};

	return (
		<>
			{isLoading && <Loader backgroundcolor="#fff" />}
			{!isLoading && (
				<Container container md={12}>
					<FirstContent container md={6} sm={12}>
						<TopContent>
							<CarouselImages images={product?.images} />
							<ViewProductContent>
								{<ProductImg src={selectedImage ? selectedImage : product?.images[0].secureUrl} alt="product" />}
								<ViewProductListContent>
									{product?.images && <ProductImages images={product?.images} setSelectedImage={setSelectedImage} />}
								</ViewProductListContent>
							</ViewProductContent>

							<ReviewCards bigScreen={true} />
						</TopContent>
					</FirstContent>
					<SecondContent container md={6} direction="column">
						<TopForm item>
							<Box>
								<Name>{product?.name}</Name>
								<Brand>Brand: {product?.brand}</Brand>
								<Price>
									Price:{" "}
									{new Intl.NumberFormat("en-NG", {
										style: "currency",
										currency: "NGN",
									}).format(product?.price)}
								</Price>
								<Ratings> Ratings</Ratings>

								{!itemInCart && <AddToCartBtn onClick={handleAddToCart}>Add Cart</AddToCartBtn>}

								{itemInCart && (
									<AddSubContent>
										<SubBtn onClick={handleDecreaseItem}>
											<RemoveIconStyle />
										</SubBtn>
										<NumValueContent>
											<Price>{itemInCart?.cartQuantity}</Price>
										</NumValueContent>
										<AddBtn onClick={handleAddToCart} disabled={isDisabled}>
											<AddIconStyle />
										</AddBtn>
									</AddSubContent>
								)}
								{itemInCart && (
									<NumOfItemsContent>
										<Description>{itemInCart?.cartQuantity} item(s) has been added</Description>{" "}
									</NumOfItemsContent>
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
