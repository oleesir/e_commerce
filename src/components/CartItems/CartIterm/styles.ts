import { Paper, Box, Typography, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)(({ theme }) => ({
	backgroundColor: "#fff",
	width: "100%",
	borderTop: "1px solid #EDEDED",
	borderBottom: "1px solid #EDEDED",
}));

export const Content = styled(Paper)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	padding: "20px",
	[theme.breakpoints.down("md")]: {
		padding: "10px ",
	},
}));

export const TopContent = styled("div")(({ theme }) => ({
	backgroundColor: "#fff",
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "25px",
}));

export const PriceContent = styled("div")(({ theme }) => ({
	display: "flex",
}));

export const TopContentRight = styled("div")(({ theme }) => ({
	display: "flex",
}));

export const Img = styled("div")(({ theme }) => ({
	height: "100px",
	backgroundColor: "yellow",
	width: "100px",
	marginRight: "30px",
	[theme.breakpoints.down("md")]: {
		marginRight: "10px",
	},
}));

export const Name = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "20px",

	[theme.breakpoints.down("md")]: {
		fontSize: "16px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "14px",
	},
}));

export const BtmContent = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignContent: "flex-end",
}));

export const RemoveBtn = styled(Button)(({ theme }) => ({
	padding: "5px 10px",
	fontSize: "16px",
	// backgroundColor: "#1976D2",
	textTransform: "none",
	fontWeight: 400,
	color: "#1976D2",
	cursor: "pointer",
	"&:hover": {
		color: "#fff",
		backgroundColor: "#1976D2",
	},
}));

export const AddSubContent = styled("div")(({ theme }) => ({
	display: "flex",
}));

export const AddBtn = styled(IconButton)(({ theme }) => ({
	padding: "10px",
	backgroundColor: "#1976D2",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: " #1976D2",
	},
	"&.Mui-disabled": {
		backgroundColor: " #1976D2",
		opacity: 0.5,
		cursor: "not-allowed",
	},
	[theme.breakpoints.down("md")]: {
		padding: "10px",
	},
}));

export const SubBtn = styled(IconButton)(({ theme }) => ({
	padding: "10px",
	backgroundColor: "#1976D2",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: " #1976D2",
	},
	"&.Mui-disabled": {
		backgroundColor: " #1976D2",
		opacity: 0.5,
		cursor: "not-allowed",
	},

	[theme.breakpoints.down("md")]: {
		padding: "10px",
	},
}));

export const NumValueContent = styled("div")(({ theme }) => ({
	width: "10%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "0 20px",
	backgroundColor: "#F5F5F5",
}));

export const Description = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "16px",
	wordBreak: "break-word",
	[theme.breakpoints.down("sm")]: {
		fontSize: "14px",
	},
}));

export const RemoveIconStyle = styled(RemoveIcon)(({ theme }) => ({
	fontSize: "large",
	color: "#fff",
}));

export const AddIconStyle = styled(AddIcon)(({ theme }) => ({
	fontSize: "large",
	color: "#fff",
}));
