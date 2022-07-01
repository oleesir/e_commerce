import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Wrapper,
	Content,
	TopContent,
	TopContentRight,
	Img,
	Name,
	PriceContent,
	BtmContent,
	RemoveBtn,
	AddSubContent,
	SubBtn,
	AddBtn,
	NumValueContent,
	RemoveIconStyle,
	AddIconStyle,
} from "./styles";
const CartItem = () => {
	return (
		<Wrapper>
			<Content elevation={0}>
				<TopContent>
					<TopContentRight>
						<Img></Img>
						<Name>Sony PlayStation 5 Digital Edition</Name>
					</TopContentRight>
					<PriceContent>
						<Name>500000</Name>
					</PriceContent>
				</TopContent>
				<BtmContent>
					<RemoveBtn startIcon={<DeleteIcon />}>REMOVE</RemoveBtn>
					<AddSubContent>
						<SubBtn>
							<RemoveIconStyle />
						</SubBtn>
						<NumValueContent></NumValueContent>
						<AddBtn>
							<AddIconStyle />
						</AddBtn>
					</AddSubContent>
				</BtmContent>
			</Content>
		</Wrapper>
	);
};

export default CartItem;
