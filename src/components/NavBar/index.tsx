import { FC, useEffect, useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Typography from "@mui/material/Typography";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TemporaryDrawer from "./Drawer";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { logoutUser } from "../../features/authSlice";
import { ProductInfo } from "../../types/productTypes";
import { useAppSelector, useAppDispatch } from "../../store";
import { useLocation, useNavigate } from "react-router-dom";
import { getTotalQuantity } from "../../features/cartSlice";

import {
	Wrapper,
	NavContent,
	ToolBar,
	MenuStyle,
	MenuItemStyle,
	NavBtn,
	InputFieldStyles,
	SearchContent,
	SearchBtn,
	NavLink,
	LogoLink,
	Logo,
	IconBtn,
	SearchIconBtn,
	SearchToolBar,
	IcBtn,
	LogoutBtn,
	CartContent,
	CartItems,
	CartNum,
} from "./styles";
import TopDrawer from "./TopDrawer";

const NavBar: FC = () => {
	let location = useLocation();
	let navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { isAuth, user } = useAppSelector((state: any) => state.auth);
	const { cartTotalQuantity, cartItems } = useAppSelector((state: any) => state.cart);

	useEffect(() => {}, [isAuth]);
	useEffect(() => {
		if (cartItems) {
			dispatch(getTotalQuantity());
		}
	}, [cartItems, dispatch]);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const navToSearch = () => {
		return navigate("/search");
	};

	const back = () => {
		return navigate(-1);
	};

	const logout = () => {
		dispatch(logoutUser());
		handleClose();
	};

	const login = () => {
		navigate("/login");
		handleClose();
	};

	const navigateToCart = () => {
		navigate("/cart");
	};

	return (
		<Wrapper sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				{location.pathname === "/search" ? (
					<SearchToolBar>
						<SearchIconBtn onClick={back}>
							<ArrowBackIcon
								fontSize="medium"
								sx={{
									color: "#072F40",
									cursor: "pointer",
								}}
							/>
						</SearchIconBtn>
						<InputFieldStyles
							InputProps={{
								disableUnderline: true,
							}}
							variant="standard"
							placeholder="Search products,brands and categories"
						/>
						<>
							<SearchIcon
								fontSize="medium"
								sx={{
									color: "#072F40",
									cursor: "pointer",
								}}
							/>
						</>
						;
					</SearchToolBar>
				) : (
					<ToolBar>
						<Logo>
							<TemporaryDrawer />

							<LogoLink href="/">
								<Typography variant="h5" color="textPrimary" sx={{ display: "inline-block" }}>
									OLIVE
								</Typography>
							</LogoLink>
						</Logo>
						<SearchContent sx={{ display: { xs: "none", md: "flex" } }}>
							<InputFieldStyles
								InputProps={{
									disableUnderline: true,
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon />
										</InputAdornment>
									),
								}}
								variant="standard"
								placeholder="Search products,brands and categories"
							/>
							<SearchBtn>Search</SearchBtn>
						</SearchContent>
						<NavContent>
							<>
								<NavBtn
									sx={{ display: { xs: "none", md: "flex" } }}
									id="basic-button"
									aria-controls={open ? "basic-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									onClick={handleClick}
									startIcon={
										isAuth === true ? (
											<PersonOutlineOutlinedIcon fontSize="medium" />
										) : (
											<PersonOffOutlinedIcon fontSize="medium" />
										)
									}
									endIcon={anchorEl ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownIcon />}
								>
									{isAuth === true && `Hi, ${user?.firstName}`}
									{isAuth === false && "Account"}
								</NavBtn>
								<MenuStyle
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<MenuItemStyle onClick={handleClose}>
										<NavLink href={isAuth === true ? "/account" : "/login"}>
											<PersonOutlineOutlinedIcon sx={{ mr: "5px" }} />
											<Typography sx={{ display: "inline" }}>My Account</Typography>
										</NavLink>
									</MenuItemStyle>
									<MenuItemStyle onClick={handleClose}>
										<NavLink href={isAuth === true ? "/orders" : "/login"}>
											<Inventory2OutlinedIcon sx={{ mr: "5px" }} />
											<Typography sx={{ display: "inline" }}>Orders</Typography>
										</NavLink>
									</MenuItemStyle>
									<MenuItemStyle onClick={handleClose}>
										<NavLink href={isAuth === true ? "/favourites" : "/login"}>
											<FavoriteBorderOutlinedIcon sx={{ mr: "5px" }} />
											<Typography sx={{ display: "inline" }}> Favourites</Typography>
										</NavLink>
									</MenuItemStyle>
									<MenuItemStyle onClick={handleClose}>
										<NavLink href={isAuth === true ? "/favourites" : "/login"}>
											<FavoriteBorderOutlinedIcon sx={{ mr: "5px" }} />
											<Typography sx={{ display: "inline" }}> Pending Reviews</Typography>
										</NavLink>
									</MenuItemStyle>
									<MenuItemStyle>
										{isAuth && (
											<LogoutBtn disableElevation disableFocusRipple onClick={logout}>
												Logout
											</LogoutBtn>
										)}
										{!isAuth && (
											<LogoutBtn disableElevation disableFocusRipple onClick={login}>
												Login
											</LogoutBtn>
										)}
									</MenuItemStyle>
								</MenuStyle>
							</>

							<>
								<IcBtn onClick={navToSearch}>
									<SearchIcon
										fontSize="medium"
										sx={{
											color: "#072F40",
											cursor: "pointer",
											display: { xs: "flex", md: "none" },
										}}
									/>
								</IcBtn>
								<TopDrawer />
								<IconBtn onClick={navigateToCart}>
									<CartContent>
										{cartTotalQuantity === 0 && null}
										{cartTotalQuantity > 0 && (
											<CartItems>
												<CartNum>{cartTotalQuantity}</CartNum>
											</CartItems>
										)}
										<ShoppingCartOutlinedIcon
											fontSize="medium"
											sx={{
												color: "#072F40",
												cursor: "pointer",
											}}
										/>
									</CartContent>
								</IconBtn>
							</>
						</NavContent>
					</ToolBar>
				)}
			</AppBar>
		</Wrapper>
	);
};

export default NavBar;
