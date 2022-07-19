import React, { Dispatch, SetStateAction } from "react";
import { Container, Image } from "./styles";

type ImageProps = {
	image: string;
	setSelectedImage: Dispatch<SetStateAction<string>>;
};
const ProductImage = ({ image, setSelectedImage }: ImageProps) => {
	const handleSelectedImage = () => {
		setSelectedImage(image);
	};
	return (
		<Container onClick={handleSelectedImage}>
			<Image src={image} alt="small images" />
		</Container>
	);
};

export default ProductImage;
