import { IconButton, Button, Typography } from "@mui/material";

import { styled } from "@mui/system";

export const Logo = styled("div")(({ theme }) => ({
	display: "flex",
	paddingTop: "10px",
	alignItems: "center",
	// [theme.breakpoints.down("md")]: {
	// 	padding: "15px",
	// },
}));

export const IconBtn = styled(IconButton)(({ theme }) => ({
	marginLeft: "10px",
}));

export const LogoutBtn = styled(Button)(() => ({
	padding: "15px 0",
	width: "100%",
	fontSize: "18px",
	textTransform: "none",
	fontWeight: 400,
	backgroundColor: "transparent",
	color: "#1976D2",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "transparent",
	},
	"&.MuiButton-root": { borderRadius: 0 },
}));

export const AccountView = styled("div")(({ theme }) => ({
	width: "100%",
	backgroundColor: "#1976D2",
	padding: "10px",
	marginTop: "10px",
}));

export const Greetings = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	color: "#fff",
	marginBottom: "3px",
}));

export const UserEmail = styled(Typography)(({ theme }) => ({
	fontSize: "13px",
	color: "#fff",
}));
