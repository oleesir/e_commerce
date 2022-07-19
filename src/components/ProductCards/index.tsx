import React from "react";
import ProductCard from "./ProductCard";
import { ProductInfo } from "../../types/productTypes";
import { Container } from "./styles";

type InputType = {
	products: ProductInfo[];
};

const ProductCards = ({ products }: InputType) => {
	return (
		<Container container item spacing={3}>
			{products.map((product) => (
				<ProductCard
					product={product}
					key={product?._id}
					productId={product?._id}
					slug={product?.slug}
					prodName={product?.name}
					prodPrice={product?.price}
					prodImage={product?.images[0].secureUrl}
				/>
			))}
		</Container>
	);
};

export default ProductCards;
