import * as React from "react";
import AppBar from "@mui/material/AppBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Typography from "@mui/material/Typography";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import TemporaryDrawer from "./Drawer";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";

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
} from "./styles";

const NavBar = () => {
	let location = useLocation();
	let navigate = useNavigate();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	console.log("LOCATION", location);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
						<SearchIconBtn>
							<SearchIcon
								fontSize="medium"
								sx={{
									color: "#072F40",
									cursor: "pointer",
								}}
							/>
						</SearchIconBtn>
						;
					</SearchToolBar>
				) : (
					<ToolBar>
						<Logo>
							<TemporaryDrawer />
							<LogoLink href="/home">
								<Typography variant="h5" color="textPrimary" sx={{ display: "inline-block" }}>
									Olive
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
									startIcon={<PersonOffOutlinedIcon fontSize="medium" />}
									endIcon={anchorEl ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownIcon />}
								>
									Account
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
										<NavLink href="/account">
											<PersonOutlineOutlinedIcon sx={{ mr: "5px" }} />
											<Typography sx={{ display: "inline" }}>My Account</Typography>
										</NavLink>
									</MenuItemStyle>
									<MenuItemStyle onClick={handleClose}>
										<NavLink href="/orders">
											<Inventory2OutlinedIcon sx={{ mr: "5px" }} />
											<Typography sx={{ display: "inline" }}>Orders</Typography>
										</NavLink>
									</MenuItemStyle>
									<MenuItemStyle onClick={handleClose}>
										<NavLink href="/favourites">
											<FavoriteBorderOutlinedIcon sx={{ mr: "5px" }} />
											<Typography sx={{ display: "inline" }}> Favourites</Typography>
										</NavLink>
									</MenuItemStyle>
									<MenuItemStyle onClick={handleClose}>
										<LogoutOutlinedIcon sx={{ mr: "2px" }} />
										Logout
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
								<IconBtn>
									<NoAccountsOutlinedIcon
										fontSize="medium"
										sx={{
											color: "#072F40",
											cursor: "pointer",
											display: { xs: "flex", md: "none" },
										}}
									/>
								</IconBtn>
								<IconBtn>
									<ShoppingCartOutlinedIcon
										fontSize="medium"
										sx={{
											color: "#072F40",
											cursor: "pointer",
										}}
									/>
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
