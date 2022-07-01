import React from "react";
import { Grid, Box, Divider } from "@mui/material";
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
import CartItem from "./CartIterm";

const CartItems = () => {
	return (
		<Wrapper>
			<Grid container md={12} sm={12}>
				<CartMobileContent>
					<Name>Subtotal</Name>
					<Name>50000</Name>
				</CartMobileContent>
				<Grid item md={8} sm={12} xs={12} flexDirection="column">
					<Header>
						<Name>Cart(1)</Name>
					</Header>
					<MainContent elevation={0}>
						<CartItem />
						<CartItem />
						<CartItem />
					</MainContent>
				</Grid>
				<PriceContent item md={4} sm={12} xs={12}>
					<CheckoutContent>
						<SideContent elevation={0}>
							<SummaryHeader>CART SUMMARY</SummaryHeader>
							<Divider />
							<SummaryBody>
								<SubTotal>Subtotal</SubTotal>
								<Price>500000</Price>
							</SummaryBody>
							<Divider />
							<BtnContent>
								<CheckoutBtn>Checkout</CheckoutBtn>
							</BtnContent>
						</SideContent>
					</CheckoutContent>
					<CheckoutMobileContent>
						<BtnContent>
							<CheckoutBtn>Checkout</CheckoutBtn>
						</BtnContent>
					</CheckoutMobileContent>
				</PriceContent>
			</Grid>
		</Wrapper>
	);
};

export default CartItems;
