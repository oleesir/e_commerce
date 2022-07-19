import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { addToCart, decreaseItem } from "../../../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getSingleProduct } from "../../../features/productSlice";
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
	Price,
} from "./styles";

type CartItemProps = {
	cartItemId: string;
	price: number;
	name: string;
	images: string;
	quantity: number;
};
const CartItem = ({ price, name, images, quantity, cartItemId }: CartItemProps) => {
	const dispatch = useAppDispatch();
	const [increaseBtnToDisabled, setincreaseBtnToDisabled] = useState<boolean>(false);
	const [decreaseBtnToDisabled, setDecreaseBtnToDisabled] = useState<boolean>(false);
	const { cartItems } = useAppSelector((state: any) => state.cart);
	const { product } = useAppSelector((state: any) => state.product);

	useEffect(() => {
		if (cartItemId) {
			dispatch(getSingleProduct(cartItemId));
		}
	}, [dispatch, cartItemId]);

	const selectedItem = cartItems.find((item: any) => item._id === cartItemId);

	useEffect(() => {
		if (selectedItem?.cartQuantity >= product?.countInStock) {
			setincreaseBtnToDisabled(true);
		} else {
			setincreaseBtnToDisabled(false);
		}
	}, [selectedItem?.cartQuantity, product?.countInStock]);

	useEffect(() => {
		if (selectedItem?.cartQuantity === 1) {
			setDecreaseBtnToDisabled(true);
		} else {
			setDecreaseBtnToDisabled(false);
		}
	}, [selectedItem?.cartQuantity]);

	const handleAddToCart = (event: any) => {
		dispatch(addToCart(selectedItem));
	};

	const handleDecreaseItem = (event: any) => {
		dispatch(decreaseItem(selectedItem));
	};

	return (
		<Wrapper>
			<Content elevation={0}>
				<TopContent>
					<TopContentRight>
						<Img src={images} alt="sample" />
					</TopContentRight>
					<PriceContent>
						<Name>{name}</Name>
						<Price>
							{new Intl.NumberFormat("en-NG", {
								style: "currency",
								currency: "NGN",
							}).format(price)}
						</Price>
					</PriceContent>
				</TopContent>
				<BtmContent>
					<RemoveBtn startIcon={<DeleteIcon />}>REMOVE</RemoveBtn>
					<AddSubContent>
						<SubBtn onClick={handleDecreaseItem} disabled={decreaseBtnToDisabled}>
							<RemoveIconStyle />
						</SubBtn>
						<NumValueContent>{quantity}</NumValueContent>
						<AddBtn onClick={handleAddToCart} disabled={increaseBtnToDisabled}>
							<AddIconStyle />
						</AddBtn>
					</AddSubContent>
				</BtmContent>
			</Content>
			<Divider />
		</Wrapper>
	);
};

export default CartItem;
