import { Grid, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
	backgroundColor: "#F5F5F5",
	width: "100%",
	padding: "0 50px",

	[theme.breakpoints.down("md")]: {
		padding: "0 10px",
	},
}));

export const MainContent = styled(Paper)(({ theme }) => ({
	padding: 0,
	backgroundColor: "#fff",
	width: "100%",
}));

export const Header = styled("div")(({ theme }) => ({
	backgroundColor: "#fff",
	padding: "10px 5px",
	borderBottom: "1px solid #EDEDED",
}));

export const SideContent = styled(Paper)(({ theme }) => ({
	backgroundColor: "#fff",
	width: "100%",
}));

export const SummaryHeader = styled("div")(({ theme }) => ({
	width: "100%",
	padding: "10px",
}));

export const PriceContent = styled(Grid)(({ theme }) => ({
	padding: "0 20px",
	margin: 0,
	[theme.breakpoints.down("md")]: {
		padding: "0 10px",
		width: "100%",
		marginTop: "20px",
		backgroundColor: "#fff",
		marginBottom: "20px",
	},
}));

export const SummaryBody = styled("div")(({ theme }) => ({
	padding: "10px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
}));

export const Name = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "25px",
	[theme.breakpoints.down("md")]: {
		fontSize: "22px",
	},
}));

export const SubTotal = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "18px",
	// [theme.breakpoints.down("md")]: {
	// 	fontSize: "22px",
	// },
}));

export const Price = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "25px",
	// [theme.breakpoints.down("md")]: {
	// 	fontSize: "22px",
	// },
}));

export const BtnContent = styled("div")(({ theme }) => ({
	padding: "10px",
}));

export const CheckoutBtn = styled(Button)(({ theme }) => ({
	width: "100%",
	padding: "10px",
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

export const CheckoutContent = styled("div")(({ theme }) => ({
	display: "flex",
	width: "100%",
	position: "sticky",
	top: 80,
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

export const CheckoutMobileContent = styled("div")(({ theme }) => ({
	display: "none",
	[theme.breakpoints.down("md")]: {
		width: "100%",
		display: "block",
	},
}));

export const CartMobileContent = styled("div")(({ theme }) => ({
	display: "none",
	[theme.breakpoints.down("md")]: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		padding: "5px",
		backgroundColor: "#fff",
		marginBottom: "20px",
	},
}));
