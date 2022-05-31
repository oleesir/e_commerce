import { Button, Typography, Paper } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/system";

export const AddToCartBtn = styled(Button)(() => ({
	width: "100%",
	padding: "10px",
	fontSize: "16px",
	color: "#fff",
	marginTop: "15px",
	backgroundColor: "#1976D2",
	marginBottom: "20px",
	cursor: "pointer",
	textTransform: "none",
	border: "1px solid #1976D2",
	"&:hover": {
		backgroundColor: "#1976D2",
	},
}));

export const Product = styled(Paper)(({ theme }) => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	paddingBottom: "20px",
	marginBottom: "20px",
	boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
	cursor: "pointer",
	borderRadius: "8px",
}));

export const ProductBody = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	padding: "10px",
	flexDirection: "column",
	cursor: "pointer",
}));

export const ProductName = styled(Typography)(({ theme }) => ({
	fontSize: "16.5px",
	marginBottom: "5px",
	fontWeight: "600",
	[theme.breakpoints.down("md")]: {
		fontSize: "14px",
	},
}));

export const ProductPrice = styled(Typography)(({ theme }) => ({
	marginBottom: "5px",
	[theme.breakpoints.down("md")]: {
		fontSize: "13px",
	},
}));

export const ProductPriceCart = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
}));

export const AddShoppingCart = styled(AddShoppingCartOutlinedIcon)(({ theme }) => ({
	fontSize: "22px",
	color: "#072F40",
	cursor: "pointer",
	[theme.breakpoints.down("md")]: {
		fontSize: "21px",
		marginRight: "6px",
	},
	[theme.breakpoints.down("sm")]: {
		marginLeft: "10px",
	},
}));

export const FavouriteItem = styled(FavoriteBorderOutlinedIcon)(({ theme }) => ({
	fontSize: "22px",
	color: "#072F40",
	cursor: "pointer",
	marginLeft: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "21px",
		marginLeft: "10px",
	},
	[theme.breakpoints.down("sm")]: {
		marginLeft: "5px",
	},
}));

export const ProductImg = styled("img")(({ theme }) => ({
	width: "100%",
	height: "200px",
	cursor: "pointer",
	[theme.breakpoints.down("sm")]: {
		height: "150px",
	},
}));
