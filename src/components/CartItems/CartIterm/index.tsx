import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { addToCart, decreaseItem,removeItem,removeItemFromCartApi,getUserCart } from "../../../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getSingleProduct } from "../../../features/productSlice";
import {ProductInfo} from "../../../types/productTypes";
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
	name: string | undefined;
	images: string | undefined;
	quantity: number;

};
const CartItem = ({ price, name, images, quantity, cartItemId }: CartItemProps) => {
	const dispatch = useAppDispatch();
	const [increaseBtnToDisabled, setIncreaseBtnToDisabled] = useState<boolean>(false);
	const [decreaseBtnToDisabled, setDecreaseBtnToDisabled] = useState<boolean>(false);
	const { isAuth,user } = useAppSelector((state: any) => state.auth);
	const { cartItems ,cartFromApi} = useAppSelector((state: any) => state.cart);
	const { product } = useAppSelector((state: any) => state.product);

	useEffect(() => {
		if (cartItemId) {
			dispatch(getSingleProduct(cartItemId));
		}
	}, [dispatch, cartItemId]);



	const selectedItem = cartItems.find((item: any) => item._id === cartItemId);
	// const selectedItemApi = cartFromApi?.cartItems.find((item: any) => item?.productId === cartItemId);



	useEffect(() => {
		if (selectedItem?.cartQuantity >= product?.countInStock) {
			setIncreaseBtnToDisabled(true);
		} else {
			setIncreaseBtnToDisabled(false);
		}
	}, [selectedItem?.cartQuantity, product?.countInStock]);

	useEffect(() => {
		if (selectedItem?.cartQuantity === 1) {
			setDecreaseBtnToDisabled(true);
		} else {
			setDecreaseBtnToDisabled(false);
		}
	}, [selectedItem?.cartQuantity]);

	const handleAddToCart = () => {
		dispatch(addToCart(selectedItem));
	};

	const handleDecreaseItem = () => {
		dispatch(decreaseItem(selectedItem));
	};

	const handleRemoveItem =()=>{
		isAuth ? dispatch(removeItemFromCartApi(cartItemId)): dispatch(removeItem(selectedItem))
	}

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
					<RemoveBtn startIcon={<DeleteIcon />} onClick={handleRemoveItem}>REMOVE</RemoveBtn>
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
