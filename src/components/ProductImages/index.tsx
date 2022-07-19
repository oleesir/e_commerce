import React, { Dispatch, SetStateAction } from "react";
import ProductImage from "./ProductImage";
import { Container } from "./styles";

type ImagesProps = {
	images: [{ secureUrl: string; cloudinaryId: string }];
	setSelectedImage: Dispatch<SetStateAction<string>>;
};

const ProductImages = ({ images, setSelectedImage }: ImagesProps) => {
	return (
		<Container>
			{images.map((image) => {
				return <ProductImage image={image?.secureUrl} setSelectedImage={setSelectedImage} />;
			})}
		</Container>
	);
};

export default ProductImages;
