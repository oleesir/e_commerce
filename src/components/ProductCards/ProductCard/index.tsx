import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import {
	Product,
	ProductBody,
	ProductName,
	ProductPrice,
	ProductPriceCart,
	AddShoppingCart,
	FavouriteItem,
	ProductImg,
} from "./styles";

type InputType = {
	prodName: string;
	slug: string;
	prodPrice: number;
	prodImage: string;
	productId: string;
};

const ProductCard = ({ prodName, prodPrice, prodImage, slug, productId }: InputType) => {
	const navigate = useNavigate();

	const navigateToProduct = () => {
		navigate(`/${slug}`, { state: { productId } });
	};
	return (
		<Grid item md={3} sm={6} xs={6}>
			<Product onClick={navigateToProduct}>
				<ProductImg src={prodImage} alt="product" />
				<ProductBody>
					<ProductName>
						{" "}
						{prodName.length > 40 ? prodName.slice(0, 30) : prodName}
						{prodName.length >= 40 && "..."}
					</ProductName>
					<ProductPriceCart>
						<ProductPrice>
							{" "}
							{new Intl.NumberFormat("en-NG", {
								style: "currency",
								currency: "NGN",
							}).format(prodPrice)}
						</ProductPrice>
						<div>
							<AddShoppingCart />
							<FavouriteItem />
						</div>
					</ProductPriceCart>
					<Typography>Ratings</Typography>
				</ProductBody>
			</Product>
		</Grid>
	);
};

export default ProductCard;
