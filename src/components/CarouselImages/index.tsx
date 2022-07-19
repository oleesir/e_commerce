import React from "react";
import CarouselImage from "./CarouselImage";
import { Container } from "./styles";

type ImagesProps = {
	images: [{ secureUrl: string; cloudinaryId: string }];
};

const CarouselImages = ({ images }: ImagesProps) => {
	return (
		<Container>
			{images &&
				images.map((image) => {
					return <CarouselImage image={image?.secureUrl} />;
				})}
		</Container>
	);
};

export default CarouselImages;
