import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";
import { ReviewContent, Header } from "./styles";

type InputProps = {
	bigScreen?: boolean;
	smallScreen?: boolean;
};

const ReviewCards = ({ bigScreen, smallScreen }: InputProps) => {
	return (
		<ReviewContent bigScreen={bigScreen} smallScreen={smallScreen}>
			<Header>Reviews</Header>
			<Divider />
			<ReviewCard />
			<ReviewCard />
		</ReviewContent>
	);
};

export default ReviewCards;
