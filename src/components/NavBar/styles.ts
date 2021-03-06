import { Box, TextField, Button, Link, Menu, MenuItem, Toolbar, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)(({ theme }) => ({
	backgroundColor: "#fff",
	"& .MuiAppBar-root": { backgroundColor: "#fff" },
	"& .MuiToolbar-root": { paddingLeft: "50px", paddingRight: "50px" },
	[theme.breakpoints.down("md")]: {
		"& .MuiToolbar-root": { paddingLeft: "10px", paddingRight: "10px" },
	},
}));

export const ToolBar = styled(Toolbar)(({ theme }) => ({
	display: "flex",
	width: "100%",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "5px 0",
}));

export const SearchToolBar = styled(Toolbar)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		padding: "10px 5px",
	},
}));

export const NavContent = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

export const SearchContent = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	width: "50%",
}));

export const NavBtn = styled(Button)(() => ({
	padding: "5px 10px",
	fontSize: "16px",
	backgroundColor: "#1976D2",
	textTransform: "none",
	fontWeight: 400,
	color: "#fff",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#1976D2",
	},
}));

export const SearchBtn = styled(Button)(() => ({
	padding: "5px 35px",
	fontSize: "16px",
	backgroundColor: "#1976D2",
	textTransform: "none",
	fontWeight: 400,
	color: "#fff",
	marginLeft: "5px",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#1976D2",
	},
}));

export const LogoutBtn = styled(Button)(() => ({
	padding: "5px 35px",
	width: "100%",
	fontSize: "18px",
	textTransform: "none",
	fontWeight: 400,
	color: "#1976D2",
	marginLeft: "5px",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#1976D2",
		color: "#fff",
	},
}));

export const InputFieldStyles = styled(TextField)((props) => ({
	width: "100%",
	borderRadius: "2px",
	"input::placeholder": {
		fontSize: "18px",
	},

	"& .MuiInputBase-root": {
		border: "1px solid #c0c0c0",
		fontSize: "18px",
		padding: "1px 5px",
	},
}));

export const MenuStyle = styled(Menu)(() => ({
	marginTop: "5px",
	"&.MuiMenu-root": {
		width: "50px",
		backgroundColor: "blue",
	},
	"& .MuiMenu-list": {
		width: "200px",
	},
}));

export const MenuItemStyle = styled(MenuItem)(() => ({
	display: "flex",
	alignItems: "center",
	fontSize: "14px",

	marginBottom: "13px",
	"&.MuiMenuItem-root": {
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	"&.MuiMenuItem-gutters": {
		paddingLeft: "5px",
		paddingRight: "5px",
	},
}));

export const NavLink = styled(Link)(({ theme }) => ({
	display: "flex",
	textDecoration: "none",
	color: "#072F40",
	width: "100%",
	flexWrap: "wrap",
}));

export const LogoLink = styled(Link)(({ theme }) => ({
	display: "flex",
	textDecoration: "none",
}));

export const Logo = styled("div")(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		display: "flex",
		alignItems: "center",
	},
}));

export const IconBtn = styled(IconButton)(({ theme }) => ({
	marginLeft: "10px",
}));

export const IcBtn = styled(IconButton)(({ theme }) => ({
	marginLeft: 0,
}));

export const SearchIconBtn = styled(IconButton)(({ theme }) => ({
	color: "green",
}));

export const SearchIconBtnRight = styled(IconButton)(({ theme }) => ({
	marginLeft: "10px",
}));

export const CartContent = styled("div")(({ theme }) => ({
	borderRadius: "50%",
	display: "flex",
	position: "relative",
	justifyContent: "center",
	alignItems: "center",
	width: "50px",
	height: "50px",
}));

export const CartItems = styled("div")(({ theme }) => ({
	borderRadius: "50%",
	top: "5px",
	position: "absolute",
	right: 0,
	alignItems: "center",
	backgroundColor: "#F80001",
	width: "20px",
	height: "20px",
	display: "flex",
	justifyContent: "center",
}));

export const CartNum = styled(Typography)(({ theme }) => ({
	fontSize: "10px",
	color: "#fff",
}));
