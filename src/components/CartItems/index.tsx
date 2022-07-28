import React from "react";
import {Divider, Grid} from "@mui/material";
import CartItem from "./CartIterm";
import {CartItemsFromApi, ProductInfo} from "../../types/productTypes";
import {
	BtnContent,
	CartMobileContent,
	CheckoutBtn,
	CheckoutContent,
	CheckoutMobileContent,
	Header,
	MainContent,
	Name,
	Price,
	PriceContent,
	SideContent,
	SubTotal,
	SummaryBody,
	SummaryHeader,
	Wrapper,
} from "./styles";


type CartItemsProps = {
	cartTotalQuantity: number;
	cartTotalAmount: number;
	products: ProductInfo[];
	isAuth: boolean;
	cartState: ProductInfo[];
	cartFromApi: CartItemsFromApi;
};


const CartItems = ({cartTotalQuantity, cartTotalAmount, products, isAuth, cartState, cartFromApi}: CartItemsProps) => {


	return (
		<Wrapper>
			<Grid container md={12} sm={12}>
				<CartMobileContent>
					<Name>Subtotal</Name>
					<Name>
						{new Intl.NumberFormat("en-NG", {
							style: "currency",
							currency: "NGN",
						}).format(isAuth ? cartFromApi?.totalPrice : cartTotalAmount)}
					</Name>
				</CartMobileContent>
				<Grid item md={8} sm={12} xs={12} flexDirection="column">
					<Header>
						<Name>Cart({isAuth ? cartFromApi?.totalQuantity : cartTotalQuantity})</Name>
					</Header>
					<MainContent elevation={0}>
						{(!isAuth && cartState) && cartState.map((cartItem: ProductInfo) => {
							return (
								<CartItem
									key={cartItem?._id}
									cartItemId={cartItem?._id}
									price={cartItem?.price}
									name={cartItem?.name}
									images={cartItem?.images[0].secureUrl}
									quantity={cartItem?.cartQuantity}
								/>
							)
						})}
						{(isAuth && cartFromApi) && cartFromApi?.cartItems.map((cartItem: any) => {
								const prod = products.find((p) => p?._id === cartItem?.productId)

								return (
									<CartItem
										key={cartItem?.productId}
										cartItemId={cartItem?.productId}
										price={cartItem?.price}
										name={prod?.name}
										images={prod?.images[0].secureUrl}
										quantity={cartItem?.quantity}

									/>
								)
							}
						)}
					</MainContent>
				</Grid>
				<PriceContent item md={4} sm={12} xs={12}>
					<CheckoutContent>
						<SideContent elevation={0}>
							<SummaryHeader>CART SUMMARY</SummaryHeader>
							<Divider/>
							<SummaryBody>
								<SubTotal>Subtotal</SubTotal>
								<Price>
									{" "}
									{new Intl.NumberFormat("en-NG", {
										style: "currency",
										currency: "NGN",
									}).format(isAuth ? cartFromApi?.totalPrice : cartTotalAmount)}
								</Price>
							</SummaryBody>
							<Divider/>
							<BtnContent>
								<CheckoutBtn>
									Checkout(
									{new Intl.NumberFormat("en-NG", {
										style: "currency",
										currency: "NGN",
									}).format(isAuth ? cartFromApi?.totalPrice : cartTotalAmount)}
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
								}).format(isAuth ? cartFromApi?.totalPrice : cartTotalAmount)}
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
