import React from "react";
import { Grid, Divider } from "@mui/material";
import CartItem from "./CartIterm";
import { ProductInfo } from "../../types/productTypes";
import {
	Wrapper,
	MainContent,
	SideContent,
	SubTotal,
	Header,
	Name,
	SummaryBody,
	PriceContent,
	SummaryHeader,
	Price,
	BtnContent,
	CheckoutBtn,
	CheckoutContent,
	CheckoutMobileContent,
	CartMobileContent,
} from "./styles";

type CartItemsProps = {
	cartTotalQuantity: number;
	cartTotalAmount: number;
	cartItems: ProductInfo[];
};

const CartItems = ({ cartTotalQuantity, cartTotalAmount, cartItems }: CartItemsProps) => {
	return (
		<Wrapper>
			<Grid container md={12} sm={12}>
				<CartMobileContent>
					<Name>Subtotal</Name>
					<Name>
						{new Intl.NumberFormat("en-NG", {
							style: "currency",
							currency: "NGN",
						}).format(cartTotalAmount)}
					</Name>
				</CartMobileContent>
				<Grid item md={8} sm={12} xs={12} flexDirection="column">
					<Header>
						<Name>Cart({cartTotalQuantity})</Name>
					</Header>
					<MainContent elevation={0}>
						{cartItems.map((cartItem) => (
							<CartItem
								key={cartItem._id}
								cartItemId={cartItem._id}
								price={cartItem?.price}
								name={cartItem?.name}
								image={cartItem?.image}
								quantity={cartItem?.cartQuantity}
							/>
						))}
					</MainContent>
				</Grid>
				<PriceContent item md={4} sm={12} xs={12}>
					<CheckoutContent>
						<SideContent elevation={0}>
							<SummaryHeader>CART SUMMARY</SummaryHeader>
							<Divider />
							<SummaryBody>
								<SubTotal>Subtotal</SubTotal>
								<Price>
									{" "}
									{new Intl.NumberFormat("en-NG", {
										style: "currency",
										currency: "NGN",
									}).format(cartTotalAmount)}
								</Price>
							</SummaryBody>
							<Divider />
							<BtnContent>
								<CheckoutBtn>
									Checkout(
									{new Intl.NumberFormat("en-NG", {
										style: "currency",
										currency: "NGN",
									}).format(cartTotalAmount)}
									)
								</CheckoutBtn>
							</BtnContent>
						</SideContent>
					</CheckoutContent>
					<CheckoutMobileContent>
						<BtnContent>
							<CheckoutBtn>
								Checkout(
								{new Intl.NumberFormat("en-NG", {
									style: "currency",
									currency: "NGN",
								}).format(cartTotalAmount)}
								)
							</CheckoutBtn>
						</BtnContent>
					</CheckoutMobileContent>
				</PriceContent>
			</Grid>
		</Wrapper>
	);
};

export default CartItems;
