import React from "react";
import { Container, ReviewItem, ReviewName } from "./styles";
const ReviewCard = () => {
	return (
		<>
			<Container>
				<ReviewItem>
					<ReviewName>Date</ReviewName>
					<ReviewName>Olisa</ReviewName>
					<ReviewName>Rating</ReviewName>
					<ReviewName>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</ReviewName>
				</ReviewItem>
			</Container>
		</>
	);
};

export default ReviewCard;
