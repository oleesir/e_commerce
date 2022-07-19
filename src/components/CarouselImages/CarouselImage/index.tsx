import React, { Dispatch, SetStateAction } from "react";
import { Image } from "./styles";

type ImageProps = {
	image: string;
};
const CarouselImage = ({ image }: ImageProps) => {
	return <Image src={image} alt="small images" />;
};

export default CarouselImage;
