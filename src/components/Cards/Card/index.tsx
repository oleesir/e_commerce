import React from "react";
import { Grid, Typography } from "@mui/material";

import {
	Product,
	ProductBody,
	ProductName,
	ProductPrice,
	ProductPriceCart,
	AddShoppingCart,
	FavouriteItem,
} from "./styles";
const Card = () => {
	return (
		<Grid item md={3} sm={6} xs={6}>
			<Product>
				<img src="iphone.jpeg" alt="product" style={{ width: "100%", height: "200px", cursor: "pointer" }} />
				<ProductBody>
					<ProductName>Apple Iphone X 64gb Silver Free Pouch And Tempered Glass...</ProductName>
					<ProductPriceCart>
						<ProductPrice>N300,000</ProductPrice>
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

export default Card;
