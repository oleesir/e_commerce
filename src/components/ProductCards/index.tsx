import React from "react";
import ProductCard from "./ProductCard";
import { ProductInfo } from "../../types/productTypes";
import { Container } from "./styles";

type InputType = {
	products: ProductInfo[];
};

const ProductCards = ({ products }: InputType) => {
	return (
		<Container container item spacing={2}>
			{products.map((product) => (
				<ProductCard
					key={product?._id}
					productId={product?._id}
					slug={product?.slug}
					prodName={product?.name}
					prodPrice={product?.price}
					prodImage={product?.image}
				/>
			))}
		</Container>
	);
};

export default ProductCards;
