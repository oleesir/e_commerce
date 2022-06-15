import {
	Grid,
	Typography,
	Button,
	TextField,
	FormControl,
	MenuItem,
	Select,
	TextareaAutosize,
	Paper,
} from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Grid)(({ theme }) => ({
	paddingLeft: "50px",
	paddingRight: "50px",

	[theme.breakpoints.down("md")]: {
		width: "100%",
		paddingLeft: "10px",
		paddingRight: "10px",
		color: "#072F40",
	},
}));

export const FirstContent = styled(Grid)(({ theme }) => ({
	paddingLeft: "50px",
	paddingRight: "50px",

	[theme.breakpoints.down("md")]: {
		paddingLeft: 0,
		paddingRight: 0,
	},
}));

export const SecondContent = styled(Grid)(({ theme }) => ({
	paddingTop: "100px",
	paddingLeft: "50px",
	paddingRight: "50px",

	[theme.breakpoints.down("md")]: {
		paddingTop: "50px",
		paddingLeft: "8px",
		paddingRight: "8px",
	},
}));

export const ProductImg = styled("img")(({ theme }) => ({
	width: "100%",
	height: "auto",
	cursor: "pointer",
	// [theme.breakpoints.down("sm")]: {
	// 	height: "150px",
	// },
}));

export const ReviewContent = styled("div")(({ theme }) => ({
	marginTop: "50px",
	// [theme.breakpoints.down("sm")]: {
	// 	height: "150px",
	// },
}));

export const ReviewItem = styled(Paper)(({ theme }) => ({
	width: "100%",
	padding: "10px",
	// [theme.breakpoints.down("sm")]: {
	// 	height: "150px",
	// },
}));

export const Name = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "25px",
	marginBottom: "20px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "22px",
	},
}));

export const Brand = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "20px",

	[theme.breakpoints.down("sm")]: {
		fontSize: "18px",
	},
}));

export const Price = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "20px",

	[theme.breakpoints.down("sm")]: {
		fontSize: "18px",
	},
}));

export const Ratings = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "20px",
	marginBottom: "10px",

	// [theme.breakpoints.down("sm")]: {
	// 	fontSize: "22px",
	// },
}));

export const Description = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "16px",

	// [theme.breakpoints.down("sm")]: {
	// 	fontSize: "22px",
	// },
}));

export const ReviewName = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "15px",
	marginBottom: "10px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "14px",
	},
}));
export const TopForm = styled(Grid)(({ theme }) => ({
	marginBottom: "260px",
	[theme.breakpoints.down("sm")]: {
		marginBottom: "60px",
	},
}));

export const FormHeader = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "20px",
	marginBottom: "10px",
}));

export const InputFieldLabel = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "18px",
}));

export const FormControlStyle = styled(FormControl)(({ theme }) => ({
	width: "100%",
}));

export const SelectStyle = styled(Select)(({ theme }) => ({
	width: "100%",
	borderRadius: "2px",
	border: "2px solid #F5F5F5",
	"& .MuiSelect-select": {
		"&:focus": {
			border: "transparent",
		},
	},

	[theme.breakpoints.down("sm")]: {
		border: "1px solid #F5F5F5",
	},
}));

export const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
	width: "100%",
}));

export const InputFieldStyles = styled(TextField)(({ theme }) => ({
	width: "100%",
	borderRadius: "2px",

	"input::placeholder": {
		fontSize: "18px",
	},

	"& .MuiInputBase-root": {
		border: "2px solid #F5F5F5",
		fontSize: "18px",
		padding: 0,
	},

	[theme.breakpoints.down("sm")]: {
		width: "100%",
		padding: 0,
		"input::placeholder": { border: "2px solid #F5F5F5", fontSize: "15px" },
		"& .MuiInputBase-root": {
			border: "1px solid #c0c0c0",
			fontSize: "15px",
			padding: "4px",
		},
	},
}));

export const AddToCartBtn = styled(Button)(({ theme }) => ({
	width: "100%",
	padding: "18px",
	fontSize: "18px",
	color: "#fff",
	backgroundColor: "#1976D2",
	marginTop: "30px",
	marginBottom: "20px",
	cursor: "pointer",
	fontWeight: 400,

	border: "1px solid #1976D2",
	"&:hover": {
		backgroundColor: " #1976D2",
	},

	[theme.breakpoints.down("sm")]: {
		padding: "10px",
		marginTop: "20px",
	},
}));

export const InputFieldContent = styled("div")(({ theme }) => ({
	width: "100%",
	marginBottom: "20px",
}));

export const InputTextArea = styled(TextareaAutosize)(({ theme }) => ({
	width: "100%",
	marginBottom: "20px",
	border: "2px solid #F5F5F5",
	borderRadius: "2px",
	resize: "vertical",
	overflow: "auto",
	fontSize: "18px",
	[theme.breakpoints.down("sm")]: {
		border: "1px solid #F5F5F5",
	},
}));
