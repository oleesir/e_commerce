import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import CartItems from "../../components/CartItems";
import { getTotalQuantity, getTotalAmount } from "../../features/cartSlice";
import { Wrapper } from "./styles";

const Cart: FC = () => {
	const dispatch = useAppDispatch();
	const { cartTotalQuantity, cartItems, cartTotalAmount } = useAppSelector((state: any) => state.cart);

	useEffect(() => {
		if (cartItems) {
			dispatch(getTotalQuantity());
			dispatch(getTotalAmount());
		}
	}, [cartItems, dispatch]);

	return (
		<Wrapper>
			<CartItems cartTotalQuantity={cartTotalQuantity} cartTotalAmount={cartTotalAmount} cartItems={cartItems} />
		</Wrapper>
	);
};

export default Cart;
